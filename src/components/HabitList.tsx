// component to display list of habits that are mapped from the database
import React from 'react';
// import { Habit } from '../types';

type Habit = {
	id: number;
	name: string;
	description: string;
};

interface HabitListProps {
	habits: Habit[];
}

const HabitList: React.FC<HabitListProps> = ({ habits }) => {
	if (habits.length === 0) {
		return (
			<p className='text-center text-zinc-500 py-12'>
				No habits found. Start by adding a new habit!
			</p>
		);
	}

	return (
		<div>
			<h2>Your Habits</h2>
			<ul>
				{habits.map((habit) => (
					<li key={habit.id}>
						<h3>{habit.name}</h3>
						<p>{habit.description}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default HabitList;
