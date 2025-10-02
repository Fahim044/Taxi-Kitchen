import React from 'react';
import logo from '/logo.png';
const Logo = () => {
    return (
        <div className='flex items-center gap-2'>
            <img className='w-10 ' src={logo} alt="" />
            <h2 className='font-bold text-2xl'>Taxi <span className='text-amber-500'>Kitchen</span></h2>
        </div>
    );
};

export default Logo;