import React, { use, useState } from 'react';
import OrderCard from './OrderCard';
import CookingOrder from './CookingOrder';

const OrdersContainer = ({promise}) => {
    const data= use(promise);
    // console.log(data);
const [cookingOrder,setCookingOrder]=useState([]);
const handleOrder=(order)=>{
    // console.log(order);
    const newCookingOrder=[...cookingOrder,order];
    setCookingOrder(newCookingOrder);
    // console.log(newCookingOrder);
}

    return (
        <div>

            <div className='grid grid-cols-1 lg:grid-cols-12 w-11/12 mx-auto py-5 gap-3'>
                <div className=' lg:col-span-7 '>
                    <h1 className='text-4xl font-bold'>Current orders</h1>

                <div  className=' space-y-1'>
                    {
                        data.map(order=><OrderCard key={order.id} order={order} handleOrder={handleOrder}></OrderCard>)
                    }
                    
                </div>

                </div>
                <div className='lg:col-span-5 border '>
                    <h1 className='text-4xl font-bold'>Cooking</h1>
                    <div className='space-y-2'>
                        {
                        cookingOrder.map(cookOrder=><CookingOrder key={cookOrder.id} cookOrder={cookOrder} ></CookingOrder>)
                    }
                    </div>
                     </div>

            </div>

            
        </div>
    );
};

export default OrdersContainer;