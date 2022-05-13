import React from 'react';
import { cardAboutUs } from '../../Utils/CardAboutUs.utils'
import { CardAboutUs } from '../CardAboutUs/CardAboutUs';
import './MapCardAboutUs.css'

interface MapCardAboutUsProps {

}

export const MapCardAboutUs: React.FC<MapCardAboutUsProps> = ({ }) => {
    return (
        <>
        <span className='nosotros-span'>Nosotros</span>
        <div className='aboutUsContainer'>

          
            {
                cardAboutUs.map(card => {
                    return <CardAboutUs key={card.id} card={card} />
                })
            }
        </div>
        </>
    );
};

