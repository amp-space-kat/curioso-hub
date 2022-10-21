import React from "react";
import './AugmentationMenu.scss';
import AugNav from "../AugNav/AugNav";
import AugItems from "../AugItems/AugItems";
import {Link} from 'react-router-dom';

const AugmentationMenu = () => {
    return (
        <div className="augmentation-menu">
            <AugNav />
            <AugItems />
            <div className='aug-scroll'></div>
        </div>
    )
}

export default AugmentationMenu;