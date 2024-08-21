import React, { useCallback, useRef, useState } from 'react';
import useFileStore from './useFileStore';
import { useNavigate } from 'react-router-dom';

const FileUploader = () => {
  const fileInputRef = useRef(null); // Create a reference to the hidden file input
  

  const [inputValue, setInputValue] = useState('');
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
    let filename =JSON.stringify(acceptedFiles);
    //localStorage.setItem("pdfFile", filename);
    console.log(JSON.parse(localStorage.getItem("pdfFile")).path)
  }, []);

  //const { name, setName } = useGlobalState();

  const addFile = useFileStore((state) => state.addFile);
  const navigate = useNavigate();
  const handleFileInput = (event) => {
    const files = event.target.files;
    if (files.length) {
      Array.from(files).forEach((file) => {
        const { name, size, type, lastModified } = file;
        const fileDetails = {
          name,
          size,
          type,
          dateModified: new Date(lastModified).toLocaleDateString(),
        };
        addFile(fileDetails);
        
              });
              navigate('/FileList')

    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length) {
      Array.from(files).forEach((file) => {
        const { name, size, type, lastModified } = file;
        const fileDetails = {
          name,
          size,
          type,
          dateModified: new Date(lastModified).toLocaleDateString(),
        };
        addFile(fileDetails);
      });
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the file input click
    }
  };

  const handleFileChange = (event) => {
    const files = event.target.files[0];
    
    if (files) {
      Array.from(files).forEach((file) => {
        const { name, size, type, lastModified } = file;
        const fileDetails = {
          name,
          size,
          type,
          dateModified: new Date(lastModified).toLocaleDateString(),
        };
        addFile(fileDetails);
        
              });
              navigate('/FileList')

      // You can handle the file upload here (e.g., store it, send it to a server, etc.)
      
    } 
  };
  return (
    <div>
      <input style={{display: 'none'}} type="file" multiple onChange={handleFileInput} />
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <button onClick={handleUploadClick}>Upload your file</button>
    </div>
  );
};

export default FileUploader;
