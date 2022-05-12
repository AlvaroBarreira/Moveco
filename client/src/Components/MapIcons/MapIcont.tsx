import React from 'react';
import { Icon } from '../Icon/Icon'

interface MapIconsProps {
   obj : Array<object>;
}

const MapIcons: React.FC<MapIconsProps> = ({ obj }) => {
    return (
        <div>
            {
                obj.map(icon => {

                    return <Icon iconObj={icon}  />
                }
                )
            }
        </div>
    );
};

export default MapIcons;
