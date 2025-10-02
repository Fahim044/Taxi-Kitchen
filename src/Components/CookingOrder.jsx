import React from 'react';

const CookingOrder = ({cookOrder,handleCooked,cookingOrder}) => {
    // console.log(cookingOrder);
    return (
        <div className='p-4 space-y-2 shadow-2xl rounded-2xl'>
            <h2 className='text-amber-500 font-bold text-2xl'>{cookOrder.order_title}</h2>
            <p>Quantity:{cookOrder.quantity}</p>
            <p className='text-sm text-gray-600 font-semibold '>{cookOrder.special_instruction}</p>
            <button onClick={()=>handleCooked(cookOrder,cookingOrder)} className='bg-amber-400 px-5 py-2 rounded-2xl cursor-pointer'>Cooked?</button>
        </div>
    );
};

export default CookingOrder;