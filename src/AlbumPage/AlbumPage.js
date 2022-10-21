import React from "react";
import './AlbumPage.scss';
import PhotoItem from "../PhotoItem/PhotoItem";

const pics = [1, 2, 3, 4, 5, 6]

const AlbumPage = ({className, handleEnlargePhoto}) => {
    return (
        <div className={`${className}`}>
            {pics.map(((pic, idx) => (
                <PhotoItem photo={`${className}-${idx}`} handleEnlargePhoto={handleEnlargePhoto}>{className}</PhotoItem>
            )))}
        </div>
    )
}

export default AlbumPage;