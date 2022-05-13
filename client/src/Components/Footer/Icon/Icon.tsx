import React from 'react';
import { Link } from 'react-router-dom'
import './Icon.css';

interface Props {
    image: string
} 

export const Icon = ( { image }: Props ) => {


    return (
        <>
            <Link to="#!" type="button" className="link-svg">
               <img src={image} alt="" className="link-img"/>
            </Link>
        </>
    )
}

export default Icon;