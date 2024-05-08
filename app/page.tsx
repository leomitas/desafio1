import AboutMe from './component/AboutMe'
import Footer from './component/Footer'
import Header from './component/Header'
import Techs from './component/Techs'

export default function Home() {
  return (
    <>
      <Header />
      <main className='m-auto flex items-center flex-col bg-zinc-950 text-white'>
        <AboutMe />
        <Techs />
      </main>
      <Footer />
    </>
  )
}
