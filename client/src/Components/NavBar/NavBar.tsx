import React from 'react';
import { Link } from "react-router-dom";
import { Item } from './Item/Item';

interface NavbarProps {
    titles: Array<object>;
}

export const Navbar: React.FC<NavbarProps> = ({ titles }) => {
    return (
        <div className="navbar">
            <div className="navbar-column">
                <div className="logo">
                    <Link to="/">
                        {/* <img src={logo}></img> */}
                        Example
                    </Link>
                </div>
            </div>
            <div className="navbar-column links">
                {titles.map((title) => {
                    return <Item title={title} />;
                })}
            </div>
        </div>
    );
};

