import React,{ useState } from 'react';
import { Link } from "react-router-dom";
import { Item } from './Item/Item';
import './Navbar.css'
import { titles } from '../../Utils/Navbar.utils'





interface PropsItem  {
    item: string,
    route: string,
    class_name_li: string,
    class_name_link: string
}

export const Navbar: React.FC = () => {


    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };



     
    return (
        <nav className="nav">
            <Link to='#' className="nav__brand">
                Moveco
            </Link>
            <ul className={active}>

                {
                    titles.map((title: PropsItem) => {
                        return <Item  title={title} key={title.item} />
                    })
               

                    // array.map((item: PropsItem) => {
                    //     return <ItemFooter key={item.sentence} item={item} />
                    // })

                }
                
            </ul>
            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );


};












