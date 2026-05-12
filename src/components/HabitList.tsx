import type { Habit } from '../utils/types';
import HabitItem from './HabitItem';

type HabitListProps = {
	habits: Habit[];
	deleteHabit: (id: string) => void;
};

const HabitList = ({ habits, deleteHabit }: HabitListProps) => {
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
					<HabitItem key={habit.id} habit={habit} deleteHabit={deleteHabit} />
				))}
			</ul>
		</div>
	);
};

export default HabitList;
