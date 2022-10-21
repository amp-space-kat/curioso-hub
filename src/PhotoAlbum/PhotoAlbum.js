import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './PhotoAlbum.scss';
import lottie from "lottie-web";
import AlbumPage from "../AlbumPage/AlbumPage";
import PhotoLarge from "../PhotoLarge/PhotoLarge";
import photoalbum from '../assets/photoalbum.json'

const PhotoAlbum = () => {
    const [enlargedPhoto, setEnlargedPhoto] = useState(null);
    const [hasPlayed, setHasPlayed] = useState(false)
    const handleEnlargePhoto = (photo) => {
        setEnlargedPhoto(photo);
    };

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: document.querySelector("div.album-animation"),
            animationData: photoalbum,
            loop: false,
          });
    
        anim.onComplete = function() {
            setHasPlayed(true);
        }
    }, []) 

    const closePhoto = () => {
        setEnlargedPhoto(null);
    }
    return (
        <div className='photo-album'>
            <div className='album-animation'></div>
            {hasPlayed && <>
            {enlargedPhoto && <PhotoLarge className='album-photo' enlargedPhoto={enlargedPhoto} closePhoto={closePhoto}/>}
            <Link to="/">
                <div className='exit-button'/>
            </Link>
            <div className="scroll-left"/>
            <AlbumPage className='page-1' handleEnlargePhoto={handleEnlargePhoto}/>
            <AlbumPage className='page-2' handleEnlargePhoto={handleEnlargePhoto}/>
            <div className="scroll-right"/>
            </>}
        </div>
    )
}

export default PhotoAlbum;