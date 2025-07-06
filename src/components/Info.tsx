import Block from '../common/Block'
import SubtitleTyping from '../texts/SubtitleTyping'
import Title from '../texts/Title'
import Text from '../texts/Text'
import Subtitle from '../texts/Subtitle'
import avatar from '../../assets/avatar.png'

export default function Info() {
	return (
		<div className='flex w-full gap-3'>
			<img
				src={avatar}
				className='w-4/10 border-1 border-zinc-600 flex rounded-4xl object-cover'
			/>
			<Block>
				<div className='flex flex-col justify-between'>
					<div className='flex flex-col'>
						<Title text='Егор Фадеев' />
						<SubtitleTyping
							texts={['T-Bank Intern', 'Central University', 'Developer']}
						/>
						<Subtitle text='17 y.o.' />
					</div>
					<Text text='Самара, Россия 🇷🇺' />
				</div>
			</Block>
		</div>
	)
}
