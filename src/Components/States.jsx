import { CookingPot, Heater, ScrollText } from 'lucide-react';
import React from 'react';

const States = () => {
    return (
        <div className='w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-3 gap-5 '>
           {/* Current Orders */}
            <div className='border-4 border-dotted border-amber-500 rounded-2xl p-5 '>
                <div className='flex justify-between items-center'>
                    <ScrollText className='animate-pulse' color='#fcb700' size={100} />
                <div className='text-center '>
                    <h2 className='text-xl'>Current Orders</h2>
                    <h1 className='text-6xl font-bold'>0</h1>
                </div>
                </div>
            </div>
            {/* Currently Cooking */}
           <div className='border-4 border-dotted border-amber-500 rounded-2xl p-5 '>
                <div className='flex justify-between items-center'>
                    <Heater className='animate-pulse' color='#fcb700' size={100} />
                    
                <div className='text-center '>
                    <h2 className='text-xl'>Currently Cooking</h2>
                    <h1 className='text-6xl font-bold'>0</h1>
                </div>
                </div>
            </div>
            {/* Ready to Serve */}
            <div className='border-4 border-dotted border-amber-500 rounded-2xl p-5 '>
                <div className='flex justify-between items-center'>
                    <CookingPot className='animate-pulse' color='#fcb700' size={100} />
                    
                <div className='text-center '>
                    <h2 className='text-xl'>Ready to Serve</h2>
                    <h1 className='text-6xl font-bold'>0</h1>
                </div>
                </div>
            </div>
        </div>
    );
};

export default States;