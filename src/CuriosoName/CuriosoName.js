import React from "react";
import './CuriosoName.scss';

const CuriosoName = ({name, changeCurioso}) => {
    return (
        <div className={`curioso-name ${name}`} onClick={changeCurioso}></div>
    )
}

export default CuriosoName;