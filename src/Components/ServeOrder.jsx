import React from 'react';

const ServeOrder = ({order}) => {
    console.log(order);
    return (
        <div className='rounded-2xl p-4 border bg-sky-200'>
            <h2 className='text-green-600 font-bold'>{order.order_title}</h2>
            <p>Table: {order.table_no}</p>
            <p>Waiter ID: {order.waiterId}</p>
            <p>Cooking Time: {order.cookingAt}</p>
        </div>
    );
};

export default ServeOrder;