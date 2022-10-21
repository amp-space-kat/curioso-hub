import React from "react";
import './RightNavContainer.scss';
import { constants } from "../constants";
import NavItem from '../NavItem/NavItem';
import { Link } from "react-router-dom";

const RightNavContainer = ({cameraMode}) => {
    return (
        <div className={`right-nav-container ${cameraMode ? 'isHidden' : ''}`}>
            {constants.RIGHT_NAV_ITEMS.map(item => (
                <div className="right-nav-item">
                <Link to={item.key} className={item.key}>
                    <NavItem item={item}></NavItem>
                </Link>
                </div>
            ))}
        </div>
    )
}

export default RightNavContainer;