import React from "react";
import './Augmentation.scss';
import CuriosoAvatar from "../CuriosoAvatar/CuriosoAvatar";
import AugmentationMenu from "../AugmentationMenu/AugmentationMenu";
import { Link } from 'react-router-dom';

const Augmentation = ({curioso}) => {
    return (
        <div className='augmentation-container'>
            <CuriosoAvatar name={curioso.name} activePose='pose-1' />
            <AugmentationMenu/>
            <Link to="/">
                <div className='exit-button'/>
            </Link>
        </div>
    )
}

export default Augmentation;