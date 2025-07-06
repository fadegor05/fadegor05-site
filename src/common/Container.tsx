import { type PropsWithChildren } from 'react'

export function Container({ children }: PropsWithChildren<object>) {
	return <div className='w-full p-3'>{children}</div>
}
