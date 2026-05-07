// App will have three sections: Header, Form, and Habit List

import Header from './components/Header';

export default function App() {
	return (
		<div className='min-h-screen bg-gray-100'>
			<Header />
			<main className='p-4'>
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
			</main>
		</div>
	);
}
