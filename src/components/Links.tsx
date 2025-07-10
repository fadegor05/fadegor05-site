import github from '../../assets/icons/github.png'
import telegram from '../../assets/icons/telegram.png'

interface LinkProps {
	icon: string
	username: string
	href: string
}

function Link({ icon, username, href }: LinkProps) {
	return (
		<a href={href} className='flex items-center gap-2 '>
			<img src={icon} className='size-6' />
			<div className='text-zinc-300 text-md font-medium hover:text-zinc-50 transition-all'>
				{username}
			</div>
		</a>
	)
}

const links = [
	{
		icon: telegram,
		username: '@fadegor05',
		href: 'https://t.me/fadegor05',
	},
	{
		icon: github,
		username: 'fadegor05',
		href: 'https://github.com/fadegor05',
	},
]

export default function Links() {
	return (
		<div className='w-full bg-zinc-800/50 p-4 flex rounded-4xl backdrop-blur-3xl border-1 border-zinc-600 justify-evenly gap-6 animate-fade-in-up'>
			{links.map(link => (
				<Link {...link} />
			))}
		</div>
	)
}
