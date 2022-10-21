import React, { useState, createRef } from "react";
import './MainContainer.scss';
import CuriosoContainer from "../CuriosoContainer/CuriosoContainer";
import LeftNavContainer from "../LeftNavContainer/LeftNavContainer";
import RightNavContainer from "../RightNavContainer/RightNavContainer";
import { constants } from "../constants";
import { useScreenshot } from 'use-react-screenshot'

const curiosos = [{name: 'growlz'}, {name: 'rocky'}, {name: 'wingrat'}]

const MainContainer = ({changeBackground, changeCurioso, backgroundIdx, curioso}) => {
    const [cameraMode, setCameraMode] = useState(false);
    const [image, takeScreenshot] = useScreenshot();
    const [activePose, setActivePose] = useState(constants.POSE_ITEMS[0].label);
    const [progress, setProgress] = useState(1);

    const ref = createRef(null) 
    const getImage = () => takeScreenshot(ref.current)

    const changePose = (pose) => {
        setActivePose(pose)
    }

    const updateProgress = () => {
        setProgress(progress + 1)
    }

    const isDefaultBackground = backgroundIdx === 0 && true;
    const backgroundClassName = isDefaultBackground ? curioso.name : constants.BACKGROUND_ITEMS[backgroundIdx];
    return (
        <div className={`main-container ${backgroundClassName}`} ref={ref}>
            <div className={`close-new-photo ${!cameraMode && 'isHidden'}`} onClick={() => setCameraMode(false)}/>
            <LeftNavContainer 
                curioso={curioso} 
                changeBackground={changeBackground} 
                getImage={getImage} 
                setCameraMode={setCameraMode}
                cameraMode={cameraMode}
                changePose={changePose}
                activePose={activePose}
                updateProgress={updateProgress}
            />
            <CuriosoContainer 
                curioso={curioso} 
                changeCurioso={changeCurioso} 
                image={image} 
                activePose={activePose} 
                progress={progress}
            />
            <RightNavContainer cameraMode={cameraMode}/>
        </div>
    )
};

export default MainContainer;