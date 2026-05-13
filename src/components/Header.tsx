import { isToday } from 'date-fns';
import { useHabits } from '../context/useHabits';
import Button from './Button';

export default function Header() {
	const { habits } = useHabits();

	const habitsDoneToday = habits.filter((habit) =>
		habit.completedDates.some((completedDate) =>
			isToday(new Date(completedDate)),
		),
	).length;

	const onNext = () => {
		console.log('Next week');
		// create logic to navigate to display the dates for the next week by using the date-fns library to calculate the next week based on the current week and update the state accordingly
	};

	const onPrev = () => {
		console.log('Previous week');
	};
	return (
		<header className='flex items-center justify-between'>
			<div className='flex flex-col gap-1'>
				<h1 className='text-3xl font-bold'>Habit Tracker</h1>
				<span className='text-zinc-400 text-sm'>
					{habitsDoneToday} / {habits.length} done today
				</span>
			</div>
			<div className='flex flex-col gap-1 items-end'>
				<span className='text-zinc-400 text-sm'>April 6 - Apr 12 </span>
				<div className='flex items-center gap-3'>
					<Button onClick={onPrev}>Prev</Button>
					<Button onClick={onNext}>Next</Button>
				</div>
			</div>
		</header>
	);
}
