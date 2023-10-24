import Contact from './components/Contact'
import Home from './components/Home'
import MyWorks from './components/MyWorks'
import Skills from './components/Skills'

function App() {

  return (
    <>
      <div className="bg-black">
        <div className='p-8'>

        <Home />
        <Skills />
        <MyWorks />
        <Contact />
        </div>
      </div>
    </>
  )
}

export default App
