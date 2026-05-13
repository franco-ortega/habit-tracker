import { isToday } from 'date-fns';
import { useHabits } from '../context/useHabits';
import Button from './Button';

type HeaderProps = {
	visibleDates: Date[];
	onNext: () => void;
	onPrev: () => void;
};

export default function Header({ visibleDates, onNext, onPrev }: HeaderProps) {
	const { habits } = useHabits();

	const habitsDoneToday = habits.filter((habit) =>
		habit.completedDates.some((completedDate) =>
			isToday(new Date(completedDate)),
		),
	).length;

	const dateRange = `${visibleDates[0].toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${visibleDates[visibleDates.length - 1].toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`;

	console.log(visibleDates);

	return (
		<header className='flex items-center justify-between'>
			<div className='flex flex-col gap-1'>
				<h1 className='text-3xl font-bold'>Habit Tracker</h1>
				<span className='text-zinc-400 text-sm'>
					{habitsDoneToday} / {habits.length} done today
				</span>
			</div>
			<div className='flex flex-col gap-1 items-end'>
				<span className='text-zinc-400 text-sm'>{dateRange}</span>
				<div className='flex items-center gap-3'>
					<Button onClick={onPrev}>Prev</Button>
					<Button
						onClick={onNext}
						disabled={visibleDates.some((d) => isToday(d))}
					>
						Next
					</Button>
				</div>
			</div>
		</header>
	);
}
