import {
	eachDayOfInterval,
	endOfWeek,
	format,
	isFuture,
	startOfWeek,
} from 'date-fns';
import type { Habit } from '../utils/types';
import Button from './Button';

function HabitItem({
	habit,
	deleteHabit,
}: {
	habit: Habit;
	deleteHabit: (id: number) => void;
}) {
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
				<Button
					variant='ghost-destructive'
					className='text-sm'
					onClick={() => deleteHabit(habit.id)}
				>
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

export default HabitItem;
