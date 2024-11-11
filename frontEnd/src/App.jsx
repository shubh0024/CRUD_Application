import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes, useParams } from 'react-router-dom'
import FetchedData from './Components/FetchedData'
import CreateData from './Components/CreateData'
import EditData from './Components/EditData'
import CreateMyOwnApiForm from './Components/CreateMyOwnApiForm'
import CreatdataAll from './Components/CreatdataAll'

function App() {
  
  
  return (
    <>
      <Navbar/>
      

      <Routes>
        <Route path='/' element={<FetchedData/>}></Route>
        <Route path='/create' element={<CreateData/>}></Route>
        <Route path='/createnew' element={<CreateMyOwnApiForm/>}></Route>
        <Route path='/edit/:name' element={<EditData/>}></Route>
        <Route path="/getalldata" element={<CreatdataAll/>}></Route>
      </Routes>
    </>
  )
}

export default App
