import React from 'react';
import useFileStore from './useFileStore';

const FileList = () => {
  const files = useFileStore((state) => state.files);

  return (
    <div>
      {files.length === 0 ? (
        <p></p>
      ) : (
        <ul>
          {files.map((file, index) => (
            <li key={index}>
              <p>Name: {file.name}</p>
              <p>Size: {file.size} bytes</p>
              <p>Type: {file.type}</p>
              <p>Date Modified: {file.dateModified}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FileList;