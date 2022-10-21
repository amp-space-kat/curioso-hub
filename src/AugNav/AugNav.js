import React from "react";
import './AugNav.scss';
import { constants } from "../constants";
import NavItem from "../NavItem/NavItem";

const AugNav = ({item}) => {
    return (
        <div className='aug-nav'>
            {constants.AUG_ITEMS.map(item => <NavItem className='aug-item' item={item} />)}
        </div>
    )
}

export default AugNav;