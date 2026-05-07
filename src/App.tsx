import { useState } from 'react';
import Header from './components/Header';
import HabitForm from './components/HabitForm';
import HabitList from './components/HabitList';

export default function App() {
	const [viewHabits, setViewHabits] = useState(false);

	return (
		<div className='max-w-2x1 mx-auto p-4 flex flex-col gap-4'>
			<Header />
			<HabitForm />
			<button
				className='rounded bg-blue-400 w-25'
				onClick={() => setViewHabits((prev) => !prev)}
			>
				{viewHabits ? 'Hide List' : 'View List'}
			</button>
			<HabitList
				habits={
					viewHabits
						? [
								{
									id: 1,
									name: 'Drink Water',
									description: 'Drink at least 8 glasses of water a day',
								},
								{
									id: 2,
									name: 'Exercise',
									description: 'Exercise for at least 30 minutes a day',
								},
								{
									id: 3,
									name: 'Read',
									description: 'Read for at least 20 minutes a day',
								},
							]
						: []
				}
			/>
			{/* <main className='p-4'>
				<section className='mb-4'>
					<h2 className='text-lg font-semibold'>Add New Habit</h2>
					<form>
						<input
							type='text'
							placeholder='Enter habit name'
							className='border border-gray-300 p-2 rounded'
						/>
						<button
							type='submit'
							className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600'
						>
							Add Habit
						</button>
					</form>
				</section>
				<section>
					<h2 className='text-lg font-semibold'>Habit List</h2>
					<ul>
						<li className='border-b border-gray-300 p-2'>Habit 1</li>
						<li className='border-b border-gray-300 p-2'>Habit 2</li>
						<li className='border-b border-gray-300 p-2'>Habit 3</li>
					</ul>
				</section>
			</main> */}
		</div>
	);
}
