// import React, {useState} from 'react'

const UploadImage = () => {
    const handleOnChange = async ({target}) => {
        const {files} = target;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'cloudinary_test')

        const res = await fetch('https://api.cloudinary.com/v1_1/duec6t3rs/image/upload', {
            method: 'POST',
            body: data,
        })

        console.log(res)
    }

  return (
    <div>
      <fieldset>
        <label htmlFor="file">
          <input
            type="file"
            id="file"
            name="file"
            placeholder="Upload an image"
            required
            onChange={handleOnChange}
          />
        </label>
      </fieldset>
    </div>
  );
};

export default UploadImage;