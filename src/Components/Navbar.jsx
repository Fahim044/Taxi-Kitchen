import React from 'react';
import Logo from './Logo';

const Navbar = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-2 justify-between items-center'>
            <Logo></Logo>
            <ul className='flex lg:gap-16 gap-12 '>
                <li><a href="" className='hover border-amber-500 hover:border-b-3  hover:font-bold'>Orders</a></li>
                <li><a href="" className='hover border-amber-500 hover:border-b-3  hover:font-bold'>Foods</a></li>
                <li><a href="" className='hover border-amber-500 hover:border-b-3  hover:font-bold'>Tables</a></li>
                <li><a href="" className='hover border-amber-500 hover:border-b-3  hover:font-bold'>Logout</a></li>
            </ul>
        </div>
    );
};

export default Navbar;