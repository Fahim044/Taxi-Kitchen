
import { Suspense } from 'react'
import './App.css'
import Heading from './Components/Heading'
import Navbar from './Components/Navbar'
import OrdersContainer from './Components/OrdersContainer'

const loadOrders=()=>fetch('/orders.json').then(res=>res.json());


function App() {
const ordersPromise=loadOrders();
// console.log(ordersPromise);
  return (
    <>
     <nav className='w-11/12 mx-auto py-3'>
      <Navbar></Navbar>
     </nav>
     <header>
      <Heading title="Kitchen">Room</Heading>
     </header>
     <section>
      
      <Suspense fallback={<h1>Loading...</h1>}>
    <OrdersContainer promise={ordersPromise}></OrdersContainer>
      </Suspense>
     </section>
    </>
  )
}

export default App
