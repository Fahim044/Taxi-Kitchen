import React, { use, useState } from 'react';
import OrderCard from './OrderCard';
import CookingOrder from './CookingOrder';
import ServeOrder from './ServeOrder';
import States from './States';
import { toast } from 'react-toastify';

const OrdersContainer = ({promise}) => {
    const data= use(promise);
    // console.log(data);
    const [currentOrders,setCurrentOrders]=useState(data)
    const [cookingOrder,setCookingOrder]=useState([]);
    const [servingOrder,setServingOrder]=useState([]);

const handleOrder=(order)=>{
    // console.log(order);
    const isExist=cookingOrder.find(item=>item.id==order.id);
     if(isExist)
    {
        toast.error('Order Already on processing!');
        return;
    }
    const newCookingOrder=[...cookingOrder,order];
    setCookingOrder(newCookingOrder);
    // console.log(newCookingOrder);
}
const handleCooked=(cookOrder,cookingOrder)=>{
//   console.log(cookOrder);
cookOrder.cookingAt=new Date().toLocaleTimeString();
const newServingOrder=[...servingOrder,cookOrder];
setServingOrder(newServingOrder);
// console.log(newServingOrder);
const remaining= cookingOrder.filter(item=>item.id!==cookOrder.id);
setCookingOrder(remaining);
const remainingCurrentOrders=currentOrders.filter(item=>item.id!==cookOrder.id);
setCurrentOrders(remainingCurrentOrders);
}

    return (
        <div>
            <States currentOrders={currentOrders} cookingOrder={cookingOrder} servingOrder={servingOrder} ></States>
            <div className='grid grid-cols-1 lg:grid-cols-12 w-11/12 mx-auto py-5 gap-3'>
                <div className=' lg:col-span-7 '>
                    <h1 className='text-4xl font-bold'>Current orders</h1>

                <div  className=' space-y-1'>
                    {
                        currentOrders.map(order=><OrderCard key={order.id} order={order} handleOrder={handleOrder}></OrderCard>)
                    }
                    
                </div>

                </div>
                <div className='lg:col-span-5  '>
                    <h1 className='text-4xl font-bold'>Cooking</h1>
                    <div className='mt-3 mb-5 shadow-2xl space-y-2 p-3'>
                        {
                        cookingOrder.map(cookOrder=><CookingOrder key={cookOrder.id} cookOrder={cookOrder} handleCooked={handleCooked} cookingOrder={cookingOrder} ></CookingOrder>)
                    }
                    </div>
                    <h1 className='font-bold text-4xl '>Ready to Serve</h1>
                    <div className='shadow-2xl space-y-2 p-3 rounded-2xl'>
                        {
                            servingOrder.map(order=><ServeOrder key={order.id} order={order} ></ServeOrder>)
                        }
                    </div>
                     </div>

            </div>

            
        </div>
    );
};

export default OrdersContainer;