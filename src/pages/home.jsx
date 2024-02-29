import Nav from '../components/nav'
import Hero from '../components/hero'
import Skills from '../components/skills'
import Portfolio from '../components/portfolio'
import Form from '../components/footer'

const home = () => {
  return (
    <div>
      <Nav/>
      <Hero />
      <Skills />
      <Portfolio />
      <Form />
    </div>
  )
}

export default home
