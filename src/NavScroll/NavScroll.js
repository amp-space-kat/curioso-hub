import React from "react";
import './NavScroll';

const NavScroll = ({handleScrollUp, handleScrollDown, className}) => {
    return (
        <div className={className} onClick={className === 'up' ? handleScrollUp : handleScrollDown}/>
    )
}

export default NavScroll;