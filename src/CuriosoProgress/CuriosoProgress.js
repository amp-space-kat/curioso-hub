import React from "react";
import './CuriosoProgress.scss';

const CuriosoProgress = ({progress}) => {
    return (
        <div className={`curioso-progress progress-bar-${progress}`}/>
    )
}

export default CuriosoProgress;