import { useState } from 'react';
import { addWeeks, eachDayOfInterval, endOfWeek, startOfWeek } from 'date-fns';
import { HabitProvider } from './context/HabitProvider';
import Header from './components/Header';
import HabitForm from './components/HabitForm';
import HabitList from './components/HabitList';

export default function App() {
	const [weekOffset, setWeekOffset] = useState(0);

	const week = addWeeks(new Date(), weekOffset);

	const visibleDates = eachDayOfInterval({
		start: startOfWeek(week, { weekStartsOn: 0 }),
		end: endOfWeek(week, { weekStartsOn: 0 }),
	});

	return (
		<div className='max-w-2x1 mx-auto p-4 flex flex-col gap-4'>
			<HabitProvider>
				<Header
					visibleDates={visibleDates}
					onNext={() => setWeekOffset((prev) => prev + 1)}
					onPrev={() => setWeekOffset((prev) => prev - 1)}
				/>
				<HabitForm />
				<HabitList />
			</HabitProvider>
		</div>
	);
}
