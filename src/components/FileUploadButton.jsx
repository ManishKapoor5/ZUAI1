import React, { useRef, useState } from 'react';

const FileUploadButton = () => {
  const fileInputRef = useRef(null); // Create a reference to the hidden file input
  const [uploadStatus, setUploadStatus] = useState('');

  // Function to handle the upload button click
  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the file input click
    }
  };

  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Handle the file here (e.g., store it, upload it, etc.)
      setUploadStatus(`File selected: ${file.name}`);
    } else {
      setUploadStatus('No file selected.');
    }
  };

  return (
    <div>
      <button onClick={handleUploadClick} disabled={false}>Upload</button>

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default FileUploadButton;
