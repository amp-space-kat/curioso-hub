import React from "react";
import './CuriosoAvatar.scss';

const CuriosoAvatar = ({name, activePose, progress}) => {

    // useEffect(() => {
    //     lottie.loadAnimation({
    //         container: document.querySelector(".curioso-anim"),
    //         animationData: growlz,
    //       });
    // }, [])
    return (
        <>
        {/* <div className='curioso-anim'/> */}
        <div className={`curioso-avatar ${name} ${activePose || ''}`}/>
        </>
    )
}

export default CuriosoAvatar;