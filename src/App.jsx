import React, { useState } from 'react';
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import Home from './components/Home';
import Form from './components/Form';
function App() {

 
  return (
    <BrowserRouter>
      <Form/>
      <Routes>
        <Route path="/:luke/:id" element={<Home />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
