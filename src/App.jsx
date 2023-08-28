import { useState } from 'react'
import './App.css'
import { storage } from '../firebase'
import { ref, uploadBytes } from "firebase/storage"
import { v4 } from 'uuid'

function App() {
 
  const [fileUpload, setFileUpload] = useState(null)
  const uploadFile = () => {
    if(uploadFile == null) return;
    const imageRef = ref(storage, `files/${fileUpload.name + v4()}`)
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("Image Uploaded")
    })
  }

  return (
    <>
      <div className='app'>
        Hi there
        <input type="file" onChange={(event) => {setFileUpload(event.target.files[0])}}/>
          <button onClick={fileUpload}>Upload</button>

      </div>
    </>
  )
}

export default App
