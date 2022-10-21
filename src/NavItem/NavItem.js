import React from "react";
import './NavItem.scss';
import { Link } from "react-router-dom";

const NavItem = ({className, item, clickedItem, handleClickedItem, activePose, changePose, updateProgress, isHidden}) => {
    if (className === 'left-nav-item') {
        const isSelected = item.label === clickedItem;
        if (clickedItem === 'augmentation') {
            return (
                <>
                <Link to='/augmentation' className='nav-link'>
                    <div 
                        className={`nav-item ${item.key} ${isSelected ? 'selected' : ''} ${isHidden ? 'isHidden' : ''}`}
                    />
                </Link>
                </>
            )
        }
        return (
            <div 
                className={`nav-item ${item.key} ${isSelected ? 'selected' : ''} ${isHidden ? 'isHidden' : ''}`} 
                onClick={() => handleClickedItem(item)} 
            />
        )
    }

    if (className === 'sub-nav-item') {
        if (clickedItem === 'poses') {
            return (
                <div className={`nav-item ${item.key}${activePose === item.key ? '_active' : ''}`} onClick={() => changePose(item.key)} />
            )
        }
        if (clickedItem === 'snacks') {
            return (
                // <div className={`nav-item ${item.key}}`} />
                <div className={`nav-item ${item.key}`} onClick={updateProgress}/>

            )
        }
    }

    if (className === 'aug-item') {
        return (
            <div className={`nav-item ${item}`} />
        )
    }

    return (
        <div className='nav-item' />
    )
}

export default NavItem;