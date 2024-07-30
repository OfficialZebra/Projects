import { useState } from "react";
import "./App.css";
import axios from 'axios'

function App() {
  const [file, setFile] = useState(null);
  const [savedImage, setSavedImage] = useState("");

  const handleFileChange = (event) => {
    //Handle our input change - When user adds a image
    // console.log(event.target)
    if (!event.target.files[0]) return;
    setFile(event.target.files[0])
  };

  const handleUpload = event => {
    // Send off our image to the server

    event.preventDefault();
    // create a form data object
    const formData = new FormData();
    // fill the form data object with file ref from the state
    formData.append('image', file)

    axios.post('http://localhost:3000/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        setSavedImage(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  };

  return (
    <>
      <form method="POST" onSubmit={handleUpload} encType="multipart/form-data">
        <input type="file" onChange={handleFileChange}></input>
        <button type="submit">Upload</button>
      </form>
      <div>
        {/* If Image is successfully uploaded display it here*/}
        {
          savedImage && <img src={savedImage.imageUrl} alt="user uploaded image" style={{ width: '200px' }} />
        }
      </div>
    </>
  );
}

export default App;