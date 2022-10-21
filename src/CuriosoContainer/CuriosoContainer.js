import React from "react";
import './CuriosoContainer.scss';
import CuriosoAvatar from "../CuriosoAvatar/CuriosoAvatar";
import CuriosoName from "../CuriosoName/CuriosoName";
import CuriosoProgress from "../CuriosoProgress/CuriosoProgress";
import PhotoLarge from "../PhotoLarge/PhotoLarge";

const CuriosoContainer = ({curioso, changeCurioso, image, activePose, progress}) => {
    return (
        <div className="curioso-container">
            {image && <PhotoLarge enlargedPhoto={image} className='new-photo'/>}
            <CuriosoName name={curioso.name} changeCurioso={changeCurioso} />
            <CuriosoAvatar name={curioso.name} activePose={activePose} progress={progress}/>
            <CuriosoProgress progress={progress}/>
        </div>
    )
}

export default CuriosoContainer;