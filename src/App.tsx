import { useState } from 'react';
import Header from './components/Header';
import HabitForm from './components/HabitForm';
import HabitList from './components/HabitList';
import type { Habit } from './utils/types';
import { isSameDay } from 'date-fns';

export default function App() {
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

				console.log({ alreadyCompleted });
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

	console.log({ habits });

	return (
		<div className='max-w-2x1 mx-auto p-4 flex flex-col gap-4'>
			<Header />
			<HabitForm addHabit={addHabit} />
			<HabitList
				habits={habits}
				deleteHabit={deleteHabit}
				toggleHabitCompletion={toggleHabitCompletion}
			/>
		</div>
	);
}
