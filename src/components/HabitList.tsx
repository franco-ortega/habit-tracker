// component to display list of habits that are mapped from the database
import React from 'react';
import Button from './Button';
import {
	eachDayOfInterval,
	endOfWeek,
	format,
	isFuture,
	startOfWeek,
} from 'date-fns';
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
	const visibleDates = eachDayOfInterval({
		start: startOfWeek(new Date()),
		end: endOfWeek(new Date()),
	});

	return (
		<li className='rounded-x1 bg-zinc-800 p-4 flex flex-col gap-3'>
			<section>
				<h3 className='font-bold text-lg'>{habit.name}</h3>
			</section>
			<section className='flex items-center justify-between'>
				<div className='flex gap-3 items-center'>
					<p className='font-medium'>{habit.description}</p>
					<span className='text-sm text-amber-400'>🔥 3</span>
				</div>
				<Button variant='ghost-destructive' className='text-sm'>
					Delete
				</Button>
			</section>
			<div className='flex gap-1.5'>
				{visibleDates.map((date) => (
					<Button
						key={date.toISOString()}
						disabled={isFuture(date)}
						className='flex flex-1 flex-col items-center gap-0.5 rounded-lg text-xs'
					>
						<span className='font-medium'>{format(date, 'EEE')}</span>
						<span>{format(date, 'd')}</span>
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
