import React, { useState, useCallback, useMemo } from 'react'
import { useRef } from 'react';
import UploadFile from '../assets/FileUpload.png'
import { DropdownMenuCheckboxes } from '@/components/DropdownMenuCheckboxes'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import evaluate from '../assets/evaluate.png'
import styled from 'styled-components'
import Template1 from '../assets/Template.png'
import Robot from '../assets/Robot.png'
import all from '../assets/All.png'
import './main.css'
import { useDropzone } from 'react-dropzone'
import { useNavigate } from 'react-router-dom'
import Sidebar from '@/components/Sidebar'
//import FileUploader from './FileUploader'
import useGlobalState from '@/app/useGlobalState'
//import FileUploadButton from '@/components/FileUploadButton'
//import GlobalStateDisplay from '@/components/GlobalStateDisplay'

const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  transition: 'border .3s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

const Main1 = () => {
  const fileInputRef = useRef(null); // Create a reference to the hidden file input
  

  const [inputValue, setInputValue] = useState('');
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
    let filename =JSON.stringify(acceptedFiles);
    //localStorage.setItem("pdfFile", filename);
    console.log(JSON.parse(localStorage.getItem("pdfFile")).path)
  }, []);

  const { name, setName } = useGlobalState();

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the file input click
    }
  };

	const updateGlobalState = () => {
		const number = parseInt(inputValue);
		if (!isNaN(number)) {
			setCount(number);
		}
	};

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop,
    accept: 'application/pdf'
  });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);
  const navigate = useNavigate();
  const [fileInfo, setFileInfo] = useState(null);

    const handleFileUpload = (event) => {
        const file = event.target.files;
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const base64String = e.target.result;
                const fileData = {
                    name: file.name,
                    size: file.size,
                    type: file.type,
                    dateModified: file.lastModified, // Date modified
                    data: base64String, // Base64 encoded file content
                };
                localStorage.setItem('pdfFile', JSON.stringify(fileData));
                setFileInfo(fileData);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleFileInput = (event) => {
      const files = event.target.files[0];
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

      const [uploadStatus, setUploadStatus] = useState('');
    
      // Function to handle the upload button click
      
    
      // Function to handle file selection
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
      <Sidebar />
      <div className='absolute top-24 left-72'>
        <div className='w-3/4 text-3xl font-bold self-center'><h1>Hey IB Folks ! Unsure about the quality of your answers? <span className='text-slate-600'>We get you.!</span></h1></div>
        
          <div className='bg-[#FCFBFDB8] absolute top-24 w-3/4 h-[88vh] rounded-xl'>
            <div className='bg-white h-56 m-6 center rounded-lg border-dashed border-[#CEC4EB] border-2'><div>
            <div {...getRootProps({style})}>
              <input {...getInputProps()} />
                <img src={UploadFile} alt='file upoad pic'/>
                
            </div>
            <input style={{display: 'none'}} type="file" onChange={handleFileInput} />
                <button onClick={handleUploadClick} className='rounded-xl border-slate-400 mt-6 border-2 p-2 w-44'>Upload</button>

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      
    
      {/* <FileUploadButton /> */}
			
            </div>
            </div>
            <div className='m-6 w-3/4'>
            <div className='text-[#7A8196] font-mont'>Select your course & subjects*</div>
            <div className='space-x-6'><DropdownMenuCheckboxes /></div>
            </div>
            <div className='m-6 w-2/4'>
            <div className='text-[#7A8196] font-mont'>Enter your essay title*(Required)</div>
            <div><Input className="rounded-full w-80" /></div>
            </div>
            <div className='mt-8 ml-6'>
            <Button className='text-white pl-1 font-mont bg-[#ADB8C9] w-56 text-[3vh] rounded-full'><img padding={10} src={evaluate} alt=''/>&nbsp;&nbsp;Evaluate your score</Button>
            </div>
            
        </div>
        <img className="flex float-end m-5 h-[89vh]" src={Robot} width={210} alt="Robot pic"/>
</div>

<div className='absolute top-[135vh] w-[70vw] left-72 text-[#5B6170] text-5xl font-mont font-semibold'>My coursework</div>
<div className="absolute top-[140vh] flex gap-3 left-72">
<img className="top-[147vh] my-10" src={Template1} alt=''/>
<img className="top-[147vh] my-10" src={Template1} alt=''/>

</div>

<div className='absolute top-[195vh] w-[70vw] left-72 text-[#5B6170] text-5xl font-mont font-semibold'>Explore coursework</div>
<div className=''></div>
<div className="absolute top-[140vh] flex gap-3 left-72">
<img className="my-10" src={Template1} alt=''/>
<img className="my-10" src={Template1} alt=''/>

</div>
<img className="w-[70vw] my-3 h-12 absolute top-[203vh] left-72"src={all} alt=''/>
<div className="absolute top-[207vh] flex gap-3 left-72">

<img className="my-10" src={Template1} alt=''/>
<img className="my-10" src={Template1} alt=''/>

</div>

<div className="absolute top-[240vh] flex gap-3 left-72">
<img className="my-10" src={Template1} alt=''/>
<img className="my-10" src={Template1} alt=''/>

</div>
</div>
  )
}

export default Main1
