import { useHabits } from '../context/useHabits';
import HabitItem from './HabitItem';

const HabitList = () => {
	const { habits } = useHabits();

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
					<HabitItem key={habit.id} {...habit} />
				))}
			</ul>
		</div>
	);
};

export default HabitList;
