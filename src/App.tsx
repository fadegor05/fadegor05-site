import { Container } from './common/Container'
import { Wrapper } from './common/Wrapper'
import About from './components/About'
import Info from './components/Info'
import Links from './components/Links'
import Projects from './components/Projects'
import Stack from './components/Stack'

function App() {
	return (
		<Container>
			<Wrapper>
				<Info />
				<Links />
				<About />
				<Projects />
				<Stack />
			</Wrapper>
		</Container>
	)
}

export default App
