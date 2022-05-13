import React from 'react';
import { Link } from 'react-router-dom';
import MapIcons from '../MapIcons/MapIcont';
import './CardAboutUs.css'
import {Instagram, Facebook} from '../../Svg/index'


interface CardAboutUsProps {
    card: CardAboutUsObj
}

interface CardAboutUsObj {
    name: string,
    surname: string,
    ocupation: string,
    description: string,
    Icons: Array<Object>,
}

 

export const CardAboutUs: React.FC<CardAboutUsProps> = ({card}) => {
    return (
        <>
            <div className="outer-div">
                <div className="inner-div">
                    <div className="front">
                        <div className="front__bkg-photo"></div>
                        <div className="front__face-photo"></div>
                        <div className="front__text">
                            <span className="front__text-header">{card.name}</span>
                            <span className="front__text-header">{card.surname}</span>

                            <span className="front__text-hover">Más sobre mi</span>
                        </div>
                    </div>
                    <div className="back">
                        <div className="social-media-wrapper">
                        <span className='back-text occupation-text'>{card.ocupation}</span>
                            <div className='back-text-container'>
                            
                            <span className='back-text'>{card.description}</span>
                            </div>
                            <div className='icon-container'>
                            <Link to="#" className="social-icon"><Instagram  aria-hidden="true"></Instagram></Link>
                            <Link to="#" className="social-icon"><Facebook aria-hidden="true"></Facebook></Link>
                            </div>


                            {/* <MapIcons obj={card.Icons} /> */}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};


