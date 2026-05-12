import type { Habit } from '../utils/types';
import HabitItem from './HabitItem';

type HabitListProps = {
	habits: Habit[];
	deleteHabit: (id: string) => void;
	toggleHabitCompletion: (id: string, date: Date) => void;
};

const HabitList = ({
	habits,
	deleteHabit,
	toggleHabitCompletion,
}: HabitListProps) => {
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
					<HabitItem
						key={habit.id}
						habit={habit}
						deleteHabit={deleteHabit}
						toggleHabitCompletion={toggleHabitCompletion}
					/>
				))}
			</ul>
		</div>
	);
};

export default HabitList;
