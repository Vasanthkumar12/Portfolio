import './App.css'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { NavBar } from './components/NavBar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { ThemeProvider } from './context/ThemeContext'

function App() {

  return (
      <ThemeProvider>
        <NavBar/>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />   
      </ThemeProvider>
  )
}

export default App
