import React, { useEffect, useState } from "react";
import './PhotoLarge.scss';
import lottie from "lottie-web";
import photoShare from '../assets/photoShare.json'

const PhotoLarge = ({className, enlargedPhoto, closePhoto}) => {
    const [toShare, setToShare] = useState(false);
    useEffect(() => {
        if(toShare) {
            const anim = lottie.loadAnimation({
                container: document.querySelector(".share-anim"),
                animationData: photoShare,
                loop: false,
            });
            // anim.onComplete = function() {
            //     setToShare(false)
            // };
        }
    }, [toShare])
    return (
        // <div className="photo-background">
            toShare ? <div className='share-anim'/> :
            <div className='photo-large'>
                <img className='photo-taken' src={enlargedPhoto}/>
                {className === 'album-photo' && <div className='close-photo-button' onClick={closePhoto}/>}
                {className === 'new-photo' && <div className='icon-share' onClick={() => setToShare(true)}/>}
                {className === 'new-photo' && <div className='icon-delete'/>}
                <div className='photo-caption'>caption</div>
                <div className='photo-date'>10/20/2022</div>
            </div>
        // </div>
    )
}

export default PhotoLarge;