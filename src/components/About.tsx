import Block from '../common/Block'
import Title from '../texts/Title'
import Text from '../texts/Text'
import emoji from '../../assets/emojis/1.png'

export default function Info() {
	return (
		<Block>
			<div className='flex flex-col'>
				<div className='flex gap-2 items-center'>
					<Title text='Обо мне' />
					<img src={emoji} className='size-8' />
				</div>
				<Text text='Приветствую смотрящих, я занимаюсь разработкой всяких штук, иногда даже прикольных. Жестко увлекаюсь бэкендом, но и не откажусь написать какой-нибудь фронт. Шарю за английский на уровне B2. Обожаю играть в Minecraft, есть даже свой сервер по нему с лютыми фишками, типо госуслуг и рп системой.' />
			</div>
		</Block>
	)
}
