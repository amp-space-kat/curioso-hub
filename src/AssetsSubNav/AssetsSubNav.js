import React, {useEffect, useState} from "react";
import './AssetsSubNav.scss';
import NavItem from "../NavItem/NavItem";
import NavScroll from '../NavScroll/NavScroll';
import { constants } from "../constants";

const windowLength = 4;

const AssetsSubNav = ({ clickedItem, curioso, activePose, changePose, updateProgress }) => {
    const [window, setWindow] = useState([0, windowLength])
    const [displayedAssets, setDisplayAssets] = useState([]);

    useEffect(() => {
        let display = [];
        if (clickedItem?.key === 'snacks') {
            display = constants.FOOD_ITEMS.slice(0, windowLength);
            setDisplayAssets(display)
        }
        if (clickedItem?.key === 'poses') {
            display = constants.POSE_ITEMS.slice(0, windowLength);
            setDisplayAssets(display)
        }

    }, [clickedItem]);

    const assets = clickedItem?.key === 'snacks' ? [...constants.FOOD_ITEMS] : [...constants.POSE_ITEMS]
    
    const handleScrollUp = () => {
        const updWindow = window.map(idx => idx - 1);
        if (updWindow[0] < 0) return;
        const updAssets = assets.slice(...updWindow);
        setDisplayAssets(updAssets);
        setWindow(updWindow);
    };

    const handleScrollDown = () => {
        const updWindow = window.map(idx => idx + 1);
        if(updWindow[1] > assets.length) return;
        const updAssets = assets.slice(...updWindow);
        setDisplayAssets(updAssets);
        setWindow(updWindow);
    };

    return (
        <div className={`assets-sub-nav ${curioso.name}  ${clickedItem ? 'show-sub-nav' : 'hide-sub-nav'} ${clickedItem?.key || ''}`}>
            <NavScroll className='up' handleScrollUp={handleScrollUp}/>
            {displayedAssets.map(asset => (
                <NavItem 
                    className='sub-nav-item' 
                    item={asset} 
                    activePose={activePose} 
                    handlePoseClick={changePose}
                    clickedItem={clickedItem?.key}
                    updateProgress={updateProgress}
                    changePose={changePose}
                />))}
            <NavScroll className='down' handleScrollDown={handleScrollDown}/>
        </div>
    )
}

export default AssetsSubNav;