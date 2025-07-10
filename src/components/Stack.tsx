import Block from '../common/Block'
import Title from '../texts/Title'
import emoji from '../../assets/emojis/3.png'
import MiniTitle from '../texts/MiniTitle'

interface StackCategoryProps {
	name: string
	techs: string[]
}

function StackCategory({ name, techs }: StackCategoryProps) {
	return (
		<div className='flex flex-col gap-1'>
			<MiniTitle text={name} />
			<div className='flex flex-wrap gap-1'>
				{techs.map(tech => (
					<div
						className={`bg-white p-3 rounded-3xl flex items-center justify-center w-fit`}
					>
						<img src={tech} className='size-10' />
					</div>
				))}
			</div>
		</div>
	)
}

const categories = [
	{
		name: 'Языки',
		techs: [
			'https://images.icon-icons.com/2699/PNG/512/python_logo_icon_168886.png',
			'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
			'https://images.icon-icons.com/2415/PNG/512/typescript_original_logo_icon_146317.png',
			'https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png',
		],
	},
	{
		name: 'Python',
		techs: [
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_3MFhCzXcwI3GWIDTsWJg2HXDTG7TwGovA&s',
			'https://litestar.dev/_static/logo.svg',
			'https://avatars.githubusercontent.com/u/110818415?s=200&v=4',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxc9Bw0J8d09tD8eIByRoXuQnq3nyn8QGqvw&s',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlZeLqiLCJLB7mw7-qk1X17C__Qkxq83wWAA&s',
		],
	},
	{
		name: 'JS/TS',
		techs: [
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHR_P-7OxbDx2-EpUFbKc24Ee2jKJYms_gUw&s',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcoZsMBFkU9ArhUL_HlgeESChICNA1cZcIZg&s',
		],
	},
	{
		name: 'Инструменты и прочее',
		techs: [
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQimEU07zYKTD37UKQp1UIV1lU6578hDyXTbg&s',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/GitLab_icon.svg/1200px-GitLab_icon.svg.png',
			'https://avatars.githubusercontent.com/u/44036562?s=400&v=4',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Amazon-S3-Logo.svg/1712px-Amazon-S3-Logo.svg.png',
			'https://cdn.iconscout.com/icon/free/png-256/free-nginx-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945048.png',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwod0EgYh6ixNJuzJAZt413WNM0SX8RrUJsg&s',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/2066px-Prometheus_software_logo.svg.png',
		],
	},
	{
		name: 'Базы данных',
		techs: [
			'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtQumHnpFMwppHBTkHJlIhEOkFPumg9ZAtVw&s',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIYcVhjyU9sZYDi5925vhLFqOo7qDX1yJcHA&s',
		],
	},
]

export default function Stack() {
	return (
		<Block>
			<div className='flex flex-col gap-2'>
				<div className='flex gap-2 items-center'>
					<Title text='Мой стек' />
					<img src={emoji} className='h-8' />
				</div>
				{categories.map(category => (
					<StackCategory {...category} />
				))}
			</div>
		</Block>
	)
}
