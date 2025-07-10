import type { PropsWithChildren } from 'react'

export default function Block({ children }: PropsWithChildren<object>) {
	return (
		<div className='w-full bg-zinc-800/50 p-7 flex rounded-4xl backdrop-blur-3xl border-1 border-zinc-600 animate-fade-in-up'>
			{children}
		</div>
	)
}
