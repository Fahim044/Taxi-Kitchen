import React, { use } from 'react';
import OrderCard from './OrderCard';

const OrdersContainer = ({promise}) => {
    const data= use(promise);
    console.log(data);
    return (
        <div>

            <div className='grid grid-cols-1 lg:grid-cols-12 w-11/12 mx-auto py-5'>
                <div className=' lg:col-span-7 '>
                    <h1 className='text-4xl font-bold'>Current orders</h1>

                <div className=' '>
                    {
                        data.map(order=><OrderCard order={order}></OrderCard>)
                    }
                    
                </div>

                </div>
                <div className='lg:col-span-5 border '>
                    <h1 className='text-4xl font-bold'>Cooking</h1>

                     </div>

            </div>

            
        </div>
    );
};

export default OrdersContainer;