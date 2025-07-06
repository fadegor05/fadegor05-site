interface SubtitleTypingProps {
	texts: string[]
}

export default function SubtitleTyping({ texts }: SubtitleTypingProps) {
	return (
		<h1 className=' font-extrabold text-lg bg-gradient-to-r text-transparent bg-clip-text from-yellow-300 to-orange-400'>
			{texts[2]}
		</h1>
	)
}
