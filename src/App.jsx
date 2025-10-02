
import './App.css'
import Heading from './Components/Heading'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
     <nav className='w-11/12 mx-auto py-3'>
      <Navbar></Navbar>
     </nav>
     <header>
      <Heading title="Kitchen">Room</Heading>
     </header>
     
    </>
  )
}

export default App
