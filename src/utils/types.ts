export type Habit = {
	id: number;
	name: string;
	description: string;
};

export type HabitListProps = {
	habits: Habit[];
};
