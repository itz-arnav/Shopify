import { useState } from 'react';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from "./assets/css/App/App.module.css";

function App() {

  return (
    <div className={css.appContainer}>
      <Router>
        <ToastContainer />
        <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
