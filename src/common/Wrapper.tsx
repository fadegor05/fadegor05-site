import { type PropsWithChildren } from 'react'

export function Wrapper({ children }: PropsWithChildren<object>) {
	return (
		<div className='md:w-170 w-full flex flex-col flex-grow items-center gap-3 mx-auto'>
			{children}
		</div>
	)
}
