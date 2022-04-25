import React from 'react';
import { Link } from 'react-router-dom'
import './item.css'

interface ItemProps {
    
    item: string
}

export const Item: React.FC<ItemProps> = ({ item }) => {
    return (
        <>
            <Link className='link-navBar' to={'3#'}>{item}</Link>
        </>
    );
};
