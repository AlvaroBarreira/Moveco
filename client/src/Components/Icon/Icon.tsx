import React, { ComponentType, ReactHTMLElement } from 'react'
 
import { Link } from 'react-router-dom'

interface IconProps {
    iconObj: itemProps;
}

interface itemProps {

    link: string;
    Type: Function;
 
}

export const Icon: React.FC<IconProps> = ({ iconObj }) => {

    const {  link,Type } = iconObj
    return (
        <>
             
        <div className=''>
            <div className='icon-box'>
           <Type className='icon'/>
            </div>
          
      
       
    </div>
        </>
    );
};

 



