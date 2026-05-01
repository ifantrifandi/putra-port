import Navbar from './components/Navbar'
import Cursor from './components/Cursor'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Portfolio from './sections/Portfolio'
import Photography from './sections/Photography'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="texture-bg relative">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Photography />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
