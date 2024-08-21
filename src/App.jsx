import Sidebar from './components/Sidebar'
import './App.css'
import Main1 from './Main/Main1'
import FirstPage from './Main/FirstPage'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
//import FileOverview from './Main/FileOverview'
import React, { useState } from 'react';
import FileList from './Main/FileList'
import FileUploader from './Main/FileUploader'

export default function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
      
      <Route path="/" element={<Main1 /> }/>
      <Route path="/Firstpage" element={<FirstPage />}/>
      <Route  path="/FileUploader" element={<FileUploader />}/>
	    <Route path="/FileList" element={<FileList />}/>
      </Routes>
    </BrowserRouter>
	
    </>
  )
}

	
	
