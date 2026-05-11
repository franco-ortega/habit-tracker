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
		<div className='flex flex-col gap-3'>
			<ul>
				{habits.map((habit) => (
					<HabitItem key={habit.id} habit={habit} />
				))}
			</ul>
		</div>
	);
};

function HabitItem({ habit }: { habit: Habit }) {
	return (
		<li className='rounded-x1 bg-zinc-800 p-4 flex flex-col gap-3'>
			<h3 className='flex items-center'>{habit.name}</h3>
			<p>{habit.description}</p>
		</li>
	);
}

export default HabitList;
