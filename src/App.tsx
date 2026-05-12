import { useHabits } from './context/useHabits';
import Header from './components/Header';
import HabitForm from './components/HabitForm';
import HabitList from './components/HabitList';

export default function App() {
	const { habits, addHabit, deleteHabit, toggleHabitCompletion } = useHabits();

	console.log({ habits });

	return (
		<div className='max-w-2x1 mx-auto p-4 flex flex-col gap-4'>
			<Header />
			<HabitForm addHabit={addHabit} />
			<HabitList
				habits={habits}
				deleteHabit={deleteHabit}
				toggleHabitCompletion={toggleHabitCompletion}
			/>
		</div>
	);
}
