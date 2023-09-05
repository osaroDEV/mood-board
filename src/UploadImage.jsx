import {useState} from 'react'

const UploadImage = () => {
    const [uploadedImage, setImage] = useState({});
    const [isLoading, setLoading] = useState(false);

    const handleOnChange = async ({target}) => {
        const {files} = target;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'cloudinary_test')

        const res = await fetch('https://api.cloudinary.com/v1_1/duec6t3rs/image/upload', {
            method: 'POST',
            body: data,
        })

        const { secure_url, eager } = await res.json();

    setImage({
      image: secure_url,
      largeImage: eager[0].secure_url,
    });

    setLoading(false);
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
      {isLoading && <p>Loading...</p>}
        <div className="imageContainer">
          {uploadedImage.image && (
            <img src={uploadedImage.image} alt="Upload Preview" />
          )}

          {uploadedImage.largeImage && (
            <img src={uploadedImage.largeImage} alt="Upload Preview" />
          )}
          </div>
    </div>
  );
};

export default UploadImage;