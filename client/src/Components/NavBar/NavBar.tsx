import React from 'react';
import { Link } from "react-router-dom";
import { Item } from './Item/Item';
import './Navbar.css'
import { titles } from '../../Utils/Navbar.utils'


export const Navbar: React.FC = () => {
    return (
        <div className="navbar">
            <div className="navbar-column">
                <div className="logo">
                    <Link to="/">
                        {/* <img className='logo-image' src={logo}></img> */}
                        Moveco
                    </Link>
                </div>
            </div>
            <div className="navbar-column links">
                {titles.map((title) => {
                    return <Item item={title.item}  />
                })}
            </div>
        </div>
    );
};

