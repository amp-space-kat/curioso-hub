import React from "react";
import './AugItems.scss';
import { constants } from "../constants";
import AugItem from '../AugItem/AugItem';

const AugItems = () => {
    return (
        <div className='aug-items'>
            {constants.AUG_HEADS.map(item => <AugItem item={item}/>)}
        </div>

    )
}

export default AugItems;