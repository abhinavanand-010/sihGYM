import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Homepage from "./Components/Homepage";
import Bodybuilding from './Components/Bodybuiding/Bodybuilding';
import Education from './Components/Education';
import BlogDetail from './Components/education/[id]/Blog';
import BMICALCULATE from './Components/Calculator';
import Diet from './Components/Diet';
import DietDetail from './Components/diet/[id]/Diett';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/bodybuilding" element={<Bodybuilding/>}/>
          <Route path='/Education' element={<Education/>}/>
          <Route path="/education/:id" element={<BlogDetail/>} />
          <Route path="/calculator" element={<BMICALCULATE/>}/>
          <Route path="/Diet" element={<Diet />}/>
          <Route path="/diet/:id" element={<DietDetail />}/>
     </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
