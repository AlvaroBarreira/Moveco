import React from 'react';
import { Link } from 'react-router-dom'
import './item.css'




interface ItemProps {
    title: PropsItem
}

interface PropsItem  {
    item: string,
    route: string,
    class_name_li: string,
    class_name_link: string
}

export const Item: React.FC<ItemProps> = ({ title }) => {

    const { item,route, class_name_li, class_name_link } = title
 
    return (
        <li className={class_name_li}>
            <Link to={route} className={class_name_link}>
                {item}
            </Link>
        </li>
    );
};
