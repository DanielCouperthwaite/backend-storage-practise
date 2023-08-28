import { useState } from 'react'
import './App.css'
import { storage } from '../firebase'
import { ref, uploadBytes } from "firebase/storage"
import { v4 } from 'uuid'

function App() {
 
  const [fileUpload, setFileUpload] = useState(null)
  const uploadFile = () => {
    if(uploadFile == null) return;
    const fileRef = ref(storage, `files/${fileUpload.name + v4()}`)
    uploadBytes(fileRef, fileUpload).then(() => {
      alert("File uploaded successfully!")
    })
  }

  return (
    <>
      <div className='app'>
        <h2>Click below to upload a file:</h2>
        <input type="file" onChange={(event) => {setFileUpload(event.target.files[0])}}/>
          <button onClick={uploadFile}>Upload</button>

      </div>
    </>
  )
}

export default App
