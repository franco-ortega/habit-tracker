import { useState, type ReactNode } from 'react';
import { isSameDay } from 'date-fns';
import type { Habit } from '../utils/types';
import { HabitContext } from './useHabits';

type HabitProviderProps = { children: ReactNode };

const HabitProvider = ({ children }: HabitProviderProps) => {
	const [habits, setHabits] = useState<Habit[]>([]);

	const addHabit = (habit: Habit) => {
		setHabits((prev) => [...prev, habit]);
	};

	const deleteHabit = (id: string) => {
		setHabits((prev) => prev.filter((habit) => habit.id !== id));
	};

	const toggleHabitCompletion = (id: string, date: Date) => {
		setHabits((prev) =>
			prev.map((habit) => {
				if (habit.id !== id) return habit;

				const alreadyCompleted = habit.completedDates.some((c) =>
					isSameDay(c, date),
				);

				const completedDates = alreadyCompleted
					? habit.completedDates.filter(
							(completedDate) => !isSameDay(completedDate, date),
						)
					: [...habit.completedDates, date];

				return {
					...habit,
					completedDates,
				};
			}),
		);
	};

	return (
		<HabitContext
			value={{ habits, addHabit, deleteHabit, toggleHabitCompletion }}
		>
			{children}
		</HabitContext>
	);
};

export { HabitProvider };
