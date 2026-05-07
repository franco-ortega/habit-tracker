import Button from './Button';

export default function HabitForm() {
	return (
		<div>
			{/* <h2 className='text-lg font-semibold'>Add New Habit</h2> */}
			<form className='flex gap-2'>
				<input
					type='text'
					placeholder='New habit...'
					className='flex-1 rounded-lg bg-zinc-800 px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-violet-500'
				/>
				<Button>Add Habit</Button>
			</form>
		</div>
	);
}
