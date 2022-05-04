import React from 'react';
import { Link } from 'react-router-dom';
import './CardOption.css'
interface CardOptionProps {
    card: CardOptionObj
}

interface CardOptionObj {
    name: string,
    surname: string,
    ocupation: string,
    description: string
}

 

const CardOption: React.FC<CardOptionProps> = ({card}) => {
    return (
        <>
            <div className="outer-div">
                <div className="inner-div">
                    <div className="front">
                        <div className="front__bkg-photo"></div>
                        <div className="front__face-photo"></div>
                        <div className="front__text">
                            <h3 className="front__text-header">{card.name}</h3>
                            <p className="front__text-para"><i className="fas fa-map-marker-alt front-icons"></i>{card.surname}</p>

                            <span className="front__text-hover">Más sobre mi</span>
                        </div>
                    </div>
                    <div className="back">
                        <div className="social-media-wrapper">
                            <span>{card.description}</span>
                            <Link to="#" className="social-icon"><i className="fab fa-linkedin-square" aria-hidden="true"></i></Link>
                            <Link to="#" className="social-icon"><i className="fab fa-instagram" aria-hidden="true"></i></Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default CardOption;
