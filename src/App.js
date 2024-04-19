import React from 'react'
import { HashRouter, Route, Routes } from "react-router-dom";
import BasicDet from './components/BasicDet'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducer";
import initialState from "./redux/initialState";
import EducationDetails from './components/EducationDetails';
import Skillsnadinterests from './components/Skillsnadinterests';
import WorkandPro from './components/WorkandPro';
import References from './components/References';
import Finalscreen from './components/Finalscreen';
import Navbar from "./components/navbar.js"
import Layout from './components/Layout.js';
function App() {
  const reduxStore = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
    preloadedState: initialState,
  });
  return (
    <Provider store={reduxStore}>
      <HashRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Layout><BasicDet /></Layout>} />
          <Route path="/edudetails" element={<Layout><EducationDetails /></Layout>} />
          <Route path="/skillsandinterests" element={<Layout><Skillsnadinterests /></Layout>} />
          <Route path="/workandpojects" element={<Layout><WorkandPro /></Layout>} />
          <Route path="/refernces" element={<Layout><References /></Layout>} />
          <Route path="/finalscreen" element={<Layout><Finalscreen /></Layout>} />
        </Routes>
      </HashRouter>
    </Provider>
    
  )
}

export default App