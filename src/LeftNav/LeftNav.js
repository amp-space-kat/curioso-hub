import React from "react";
import './LeftNav.scss';
import NavItem from '../NavItem/NavItem';
import { constants } from "../constants";

const LeftNav = ({clickedItem, handleClickedItem, curioso, setCameraMode, cameraMode}) => {
    return (
        <div className={`left-nav ${curioso.name}`}>
            {constants.LEFT_NAV_ITEMS.map(item => {
            const isHidden = cameraMode && clickedItem?.key === 'camera' && item.key !== 'camera';
            return (
                <NavItem 
                    className='left-nav-item'
                    item={item}
                    clickedItem={clickedItem}
                    handleClickedItem={handleClickedItem}
                    isHidden={isHidden}
                />
            )})}
        </div>
    )
}

export default LeftNav;