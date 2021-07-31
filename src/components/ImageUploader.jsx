import React, { useState } from 'react';

const ImageUploader = ({ parentImageSet }) => {
    const [imagePreview, setImagePreview] = useState(null);

    const handleUploadClick = event => {
        let file = event.target.files[0];
        setImagePreview(URL.createObjectURL(file));
        parentImageSet(file)
    };
    return (
        <div className='col-md-6'>
            <label htmlFor='productImage' className='form-label'>
                Product Image test
            </label>

            <input
                className='form-control productImage'
                type='file'
                id='productImage'
                multiple
                onChange={handleUploadClick}
                // value={productImage}
                accept=".pdf, .jpeg, .png, .jpg"
            />
            {imagePreview &&
                <div className="card">
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