import React from 'react';
import { cardAboutUs } from '../../Utils/CardAboutUs.utils'
import CardOption from '../CardAboutUs/option/CardOption';
import './MapCardAboutUs.css'

interface MapCardAboutUsProps {
   
}

export const MapCardAboutUs: React.FC<MapCardAboutUsProps> = ({  }) => {
    return (
        <div className='aboutUsContainer'>
            {
                cardAboutUs.map(card => {
                    return <CardOption key={card.id}/>
                })
            }
        </div>
    );
};

 