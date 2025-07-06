interface TitleProps {
	text: string
}

export default function Title({ text }: TitleProps) {
	return <h1 className='text-white font-extrabold text-2xl'>{text}</h1>
}
