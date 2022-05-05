import React from 'react';
import { Link } from 'react-router-dom';
import './CardAboutUs.css'

interface CardAboutUsProps {
    card: CardAboutUsObj
}

interface CardAboutUsObj {
    name: string,
    surname: string,
    ocupation: string,
    description: string
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
                            <div className='back-text-container'>
                            <span className='back-text'>{card.description}</span>
                            </div>
                            <Link to="#" className="social-icon"><i className="fab fa-linkedin-square" aria-hidden="true"></i></Link>
                            <Link to="#" className="social-icon"><i className="fab fa-instagram" aria-hidden="true"></i></Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};


