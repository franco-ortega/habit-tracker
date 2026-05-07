import type { ReactNode } from 'react';

type Button = {
	children: ReactNode;
};

export default function Button({ children }: Button) {
	return (
		<button className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600'>
			{children}
		</button>
	);
}
