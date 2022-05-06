import React from 'react';
import './Footer.css';
import { meetUs, help, ordersAndDelivery, icons } from '../../utils/Footer.utils';
import { ItemMap } from './ItemMap/ItemMap';
import { Subscribe } from './subscribe/Subscribe';
import { Icon } from './Icon/Icon';
import movecoIcon from '../../Assets/moveco-logo.png';

interface FooterProps {
    values: object;
}

export const Footer: React.FC<FooterProps> = ({ values }) => {
    return (
        <>
            <footer className='main-footer'>
                <div className='footer-information'>
                    <div className='footer-column'>
                        <h3>Pedidos y delivery</h3>
                        <div className="flex-inline">
                            {icons.map(icon => {
                                return (
                                    <Icon image={icon.image} key={icon.id}/>
                                )
                            })}
                        </div>
                        <img src={movecoIcon} alt="" style={{ width: '135px', height: '135px', marginTop: '20px' }}/>
                    </div>
                    <div className='footer-column'>
                        <h3>Ayuda</h3>
                        <ItemMap array={help} />
                    </div>
                    <div className='footer-column'>
                        <h3>Pedidos y delivery</h3>
                        <ItemMap array={ordersAndDelivery} />
                    </div>
                    <div className='footer-column'>
                        <h3>Conocenos</h3>
                        <ItemMap array={meetUs} />
                        <div className='footer-newsletter'>
                            <Subscribe />
                        </div>
                    </div>
                </div>


            </footer>
        </>
    );
};

