import {Routes, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home"; 
import Caregivers from "./pages/Caregivers";
import NavBar from "./components/NavBar";
import Categories from "./pages/Categories/Categories";
import Mobility from "./pages/Mobility/Mobility";
const axios = require('axios');

function App() {
  const [iframeVisible, setIframeVisible] = useState(false);

  const handleShowIframe = () => {
    setIframeVisible(true)
  }

  const handleHideIframe = () => {
    setIframeVisible(false)
  }

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='/categories' element={<Categories />}/>
      <Route path='/mobility' element={<Mobility handleShowIframe={handleShowIframe} iframeVisible={iframeVisible}/>}/>
      <Route path='/caregivers' element={<Caregivers />}/>
    </Routes>
    </>
  );
}

export default App;
