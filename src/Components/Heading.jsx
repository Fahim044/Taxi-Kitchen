import { ChefHat } from 'lucide-react';
import React from 'react';

const Heading = ({title,children}) => {
    return (
        <div className={`bg-[url(/title-bg.png)]  bg-size-[100%_100%] bg-no-repeat bg-center gap-1 text-center  pt-10 pb-20 text-4xl font-bold flex justify-center items-center` } > 
         <ChefHat size={40} />   {title} {children}
        </div>
    );
};

export default Heading;