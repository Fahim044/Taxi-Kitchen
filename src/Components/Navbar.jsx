import React from 'react';
import Logo from './Logo';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <Logo></Logo>
            <ul className='flex gap-16'>
                <li><a href="" className='hover border-amber-500 hover:border-b-3  hover:font-bold'>Orders</a></li>
                <li><a href="" className='hover border-amber-500 hover:border-b-3  hover:font-bold'>Foods</a></li>
                <li><a href="" className='hover border-amber-500 hover:border-b-3  hover:font-bold'>Tables</a></li>
                <li><a href="" className='hover border-amber-500 hover:border-b-3  hover:font-bold'>Logout</a></li>
            </ul>
        </div>
    );
};

export default Navbar;