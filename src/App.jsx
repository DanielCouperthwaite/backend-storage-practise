import { useState, useEffect } from 'react'
import './App.css'
import { storage } from '../firebase'
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage"
import { v4 } from 'uuid'

function App() {
 
  const [fileUpload, setFileUpload] = useState(null)
  const [fileList, setFileList] = useState([])
  const fileListRef = ref(storage, "files/")

  const uploadFile = () => {
    if(uploadFile == null) return;
    const fileRef = ref(storage, `files/${fileUpload.name + v4()}`)
    uploadBytes(fileRef, fileUpload).then(() => {
      alert("File uploaded successfully!")
    })
  }

  useEffect(() => {
    listAll(fileListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          if(!fileList.includes(url)){
          setFileList((prev) => [...prev, url])
          }
        })
      })
    })
  }, [])

  return (
    <>
      <div className='app'>
        <h2>Click below to upload a file:</h2>
        <input type="file" onChange={(event) => {setFileUpload(event.target.files[0])}}/>
          <button onClick={uploadFile}>Upload</button>

          <h3>Files stored:</h3>
          {fileList.map((url) => {
            return <li key="url">{url}</li>
          })}
      </div>
    </>
  )
}

export default App
