interface MiniTextProps {
	text: string
}

export default function MiniText({ text }: MiniTextProps) {
	return <h1 className='text-zinc-400 font-regular text-sm'>{text}</h1>
}
