interface SubtitleProps {
	text: string
}

export default function Subtitle({ text }: SubtitleProps) {
	return <h1 className='text-zinc-400 font-semibold text-md'>{text}</h1>
}
