import React, { useState } from 'react';

const ImageUploader = ({ parentImageSet, fieldLabel, field }) => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleUploadClick = (event) => {
    let file = event.target.files[0];
    setImagePreview(URL.createObjectURL(file));
    parentImageSet(file);
  };
  return (
    <div className='mb-3'>
      <label htmlFor={field} className='mb-2 text-muted'>
        {fieldLabel}
      </label>

      <input
        className='form-control'
        type='file'
        id={field}
        multiple
        onChange={handleUploadClick}
        accept='.pdf, .jpeg, .png, .jpg'
      />
      {imagePreview && (
        <div className='card mb-3'>
          <img
            src='img_avatar.png'
            src={imagePreview !== null ? imagePreview : ''}
            alt='Avatar'
            style={{ width: '100%' }}
          />
        </div>
      )}
    </div>
  );
};
export default ImageUploader;
