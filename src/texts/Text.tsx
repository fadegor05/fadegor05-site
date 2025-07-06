interface TextProps {
	text: string
}

export default function Text({ text }: TextProps) {
	return <h1 className='text-zinc-300 font-regular text-md'>{text}</h1>
}
