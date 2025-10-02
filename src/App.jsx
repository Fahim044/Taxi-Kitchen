
import './App.css'
import Heading from './Components/Heading'
import Navbar from './Components/Navbar'
import States from './Components/States'

function App() {

  return (
    <>
     <nav className='w-11/12 mx-auto py-3'>
      <Navbar></Navbar>
     </nav>
     <header>
      <Heading title="Kitchen">Room</Heading>
     </header>
     <section>
      <States></States>
     </section>
    </>
  )
}

export default App
