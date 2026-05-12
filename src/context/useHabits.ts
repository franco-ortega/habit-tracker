import { createContext, useContext } from 'react';
import type { Habit } from '../utils/types';

type Context = {
	habits: Habit[];
	addHabit: (habit: Habit) => void;
	deleteHabit: (id: string) => void;
	toggleHabitCompletion: (id: string, date: Date) => void;
};

export const HabitContext = createContext<null | Context>(null);

export const useHabits = () => {
	const habitContext = useContext(HabitContext);
	if (habitContext == null) {
		throw new Error('Null context provided to useHabits');
	}
	return habitContext;
};
