import React, { useState } from 'react';

const ImageUploader = ({ parentImageSet,fieldLabel,field }) => {
    const [imagePreview, setImagePreview] = useState(null);

    const handleUploadClick = event => {
        let file = event.target.files[0];
        setImagePreview(URL.createObjectURL(file));
        parentImageSet(file)
    };
    return (
        <div className='col-md-6'>
            <label htmlFor={field} className='form-label'>
                {fieldLabel}
            </label>

            <input
                className='form-control mr-3'
                type='file'
                id={field}
                multiple
                onChange={handleUploadClick}
                accept=".pdf, .jpeg, .png, .jpg"
            />
            {imagePreview &&
                <div className="card mr-3">
                    <img src="img_avatar.png"
                        src={
                            imagePreview !== null ?
                                imagePreview :
                                ""}
                        alt="Avatar" style={{ width: "100%" }} />
                </div>}
        </div>
    )
}
export default ImageUploader;