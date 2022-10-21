import React from "react";
import './PhotoItem.css';

const PhotoItem = ({photo, handleEnlargePhoto}) => {
    return (
        <div className='photo-item'onClick={() => handleEnlargePhoto(photo)}></div>
    )
};

export default PhotoItem;