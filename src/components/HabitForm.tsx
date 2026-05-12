import { useState, type SubmitEvent } from 'react';
import Button from './Button';

export default function HabitForm() {
	const [newHabit, setNewHabit] = useState('');

	console.log('New Habit:', newHabit);

	const handleSubmit = (e: SubmitEvent) => {
		e.preventDefault();
		console.log('Submitting new habit:', newHabit);

		if (newHabit.trim() === '') return;

		setNewHabit('');
	};

	return (
		<div>
			{/* <h2 className='text-lg font-semibold'>Add New Habit</h2> */}
			<form className='flex gap-2' onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='New habit...'
					className='flex-1 rounded-lg bg-zinc-800 px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-violet-500'
					value={newHabit}
					onChange={(e) => setNewHabit(e.target.value)}
				/>
				<Button
					className='rounded-lg px-4 py-2 font-medium'
					disabled={newHabit.trim() === ''}
				>
					Add Habit
				</Button>
			</form>
		</div>
	);
}
