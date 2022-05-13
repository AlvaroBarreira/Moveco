import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { ItemNav } from './ItemNav/ItemNav';

import { titles } from '../../Utils/Navbar.utils'
import { string } from 'yup/lib/locale';





interface PropsItem {
    item: string,
    route: string,
    class_name_li: string,
    class_name_link: string
}

export const Navbar: React.FC = () => {



    const [classImg, setClassImg] = useState('')
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


    const route = useLocation().pathname

 
    const routeFunction = route => {


        console.log(route)

        switch (route) {
            case '/home':
                setClassImg('div-main-navimg-bg-nav-home')
                break;
            case '/nosotros':
                setClassImg('div-main-nav img-bg-nav-quienes-somos')
                break;
            case '/contacto':
                setClassImg('div-main-nav img-bg-nav-contacto')
                break;



            default:
                setClassImg('div-main-nav img-bg-nav-home')

                break;
        }


    }

    useEffect(() => {
        routeFunction(route)

    }, [route])


    return (
        <div className={classImg}>

            <nav className="nav">
                <Link to='#' className="nav__brand">
                    Moveco
                </Link>
                <ul className={active}>

                    {
                        titles.map((title: PropsItem) => {
                            return <ItemNav title={title} key={title.item} />
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
        </div>
    );


};












