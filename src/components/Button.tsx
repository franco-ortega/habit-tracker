import type { ComponentProps, ReactNode } from 'react';

type Button = {
	children: ReactNode;
} & ComponentProps<'button'>;

export default function Button({ children, ...props }: Button) {
	return (
		<button
			{...props}
			className='bg-violet-600 hover:bg-violet-500 transition-colors rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed'
		>
			{children}
		</button>
	);
}
