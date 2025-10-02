import { UtensilsCrossed } from 'lucide-react';
import React from 'react';

const OrderCard = ({order,handleOrder}) => {
    return (
        <div onClick={()=>handleOrder(order)} className='rounded-2xl p-4 shadow-2xl cursor-pointer'>
            {/* order no+table no. */}
            <div className='flex justify-between items-center'>
                <p className='bg-amber-400 rounded-3xl p-2'>#{order.order_no}</p>
                <p className='bg-amber-400 rounded-full px-5 py-3 '>{order.table_no}</p>
            </div>
            {/* title */}
            <div className='flex gap-1 items-center my-2'>
                <UtensilsCrossed />
                <h2 className='text-2xl'>{order.quantity} {order.order_title}</h2>
            </div>
            {/* instruction */}
            <h3 className='text-amber-500'>Instruction</h3>
            <p>{order.special_instruction}</p>


                </div>
    );
};

export default OrderCard;