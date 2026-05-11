// component to display list of habits that are mapped from the database
import React from 'react';
import Button from './Button';
import { startOfWeek } from 'date-fns';
// import { Habit } from '../types';

type Habit = {
	id: number;
	name: string;
	description: string;
};

interface HabitListProps {
	habits: Habit[];
}

function HabitItem({ habit }: { habit: Habit }) {
	const visibleDates = [new Date(), new Date(), new Date()]; // Example: Show the last 3 days

	return (
		<li className='rounded-x1 bg-zinc-800 p-4 flex flex-col gap-3'>
			<h3 className='flex items-center'>{habit.name}</h3>
			<p className='flex items-center justify-between'>{habit.description}</p>
			<div className='flex gap-1.5'>
				{visibleDates.map((date) => (
					<Button key={date.toISOString()}>
						<span>Mon</span>
						<span>2</span>
					</Button>
				))}
			</div>
		</li>
	);
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
		<div className='flex flex-col gap-3 rounded-x1'>
			<ul className='flex flex-col gap-3'>
				{habits.map((habit) => (
					<HabitItem key={habit.id} habit={habit} />
				))}
			</ul>
		</div>
	);
};

export default HabitList;
