import React, { useState } from "react";
import './LeftNavContainer.css';
import LeftNav from "../LeftNav/LeftNav";
import AssetsSubNav from "../AssetsSubNav/AssetsSubNav";
import _ from 'lodash';

const LeftNavContainer = ({curioso, changeBackground, getImage, cameraMode, setCameraMode, activePose, changePose, updateProgress}) => {
    const [clickedItem, setClickedItem] = useState(null);
    const handleClickedItem = (item) => {
        if(item.key === 'camera') {
            if(cameraMode) return getImage();
            if(!cameraMode) setCameraMode(true)
        };
        if(item.key === 'background') changeBackground();
        if (_.isEqual(item, clickedItem)) return setClickedItem(null);
        return setClickedItem(item);
    };

    const shouldShowDropDown = clickedItem?.key === 'snacks' || clickedItem?.key === 'poses';

    return (
        <div className='left-nav-container'>
            <LeftNav 
                handleClickedItem={handleClickedItem} 
                clickedItem={clickedItem} 
                curioso={curioso} 
                cameraMode={cameraMode}
            />
            {shouldShowDropDown && (
                <AssetsSubNav 
                    clickedItem={clickedItem} 
                    curioso={curioso} 
                    activePose={activePose} 
                    changePose={changePose} 
                    updateProgress={updateProgress}
                />)}
        </div>
    )
}

export default LeftNavContainer;