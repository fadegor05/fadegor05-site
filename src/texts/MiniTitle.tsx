interface MiniTitleProps {
	text: string
}

export default function MiniTitle({ text }: MiniTitleProps) {
	return <h1 className='text-white font-bold text-lg'>{text}</h1>
}
