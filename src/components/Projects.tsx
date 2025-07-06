import Block from '../common/Block'
import Title from '../texts/Title'
import cubeshield from '../../assets/projects/cubeshield.png'
import wolns from '../../assets/projects/wolns.png'
import study from '../../assets/projects/study.png'
import emoji from '../../assets/emojis/2.png'
import MiniTitle from '../texts/MiniTitle'
import MiniText from '../texts/MiniText'

const projects = [
	{
		logo: cubeshield,
		name: 'CubeShield',
		description:
			'Сервер Minecraft с банковской системой, госуслугами, своим Telegram WebApp приложением',
		links: [
			{
				name: 'GitHub',
				href: 'https://github.com/cubeshield',
			},
			{
				name: 'Telegram',
				href: 'https://t.me/cubeshieldru',
			},
		],
	},
	{
		logo: study,
		name: 'Study Helper Bot',
		description:
			'Бот для Расписания и Домашнего Задания с автопарсингом расписания с сайта школы',
		links: [
			{
				name: 'GitHub',
				href: 'https://github.com/fadegor05/Study-Helper-Telegram',
			},
		],
	},
	{
		logo: wolns,
		name: 'wolns.',
		description:
			'Сервис для шейринга текущими проигрывающимися треками с разных сервисов: Spotify, Яндекс Музыка',
		links: [],
	},
]

interface LinkProps {
	name: string
	href: string
}

interface ProjectProps {
	logo: string
	name: string
	description: string
	links: LinkProps[]
}

function Project({ logo, name, description, links }: ProjectProps) {
	return (
		<div className='flex items-center gap-3'>
			<img src={logo} className='size-20 rounded-3xl' />
			<div className='flex flex-col gap-1'>
				<div className='flex flex-col'>
					<MiniTitle text={name} />
					<MiniText text={description} />
				</div>
				<div className='flex gap-4'>
					{links.length > 0 &&
						links.map(linkProps => (
							<a
								href={linkProps.href}
								className='text-md font-medium text-zinc-300'
							>
								{linkProps.name}
							</a>
						))}
				</div>
			</div>
		</div>
	)
}

export default function Projects() {
	return (
		<Block>
			<div className='flex flex-col gap-2'>
				<div className='flex gap-2 items-center'>
					<Title text='Мои проекты' />
					<img src={emoji} className='size-8' />
				</div>
				<div className='flex flex-col gap-4'>
					{projects.map(project => (
						<Project {...project} />
					))}
				</div>
			</div>
		</Block>
	)
}
