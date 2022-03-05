import {Routes, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home"; 
import Caregivers from "./pages/Caregivers/Caregivers";
import NavBar from "./components/NavBar/NavBar";
import Categories from "./pages/Categories/Categories";
import Mobility from "./pages/Mobility/Mobility";
import About from "./pages/About/About";

function App() {
  const [iframeVisible, setIframeVisible] = useState(false);

  const handleShowIframe = () => {
    setIframeVisible(true)
  }

<<<<<<< HEAD
  const handleHideIframe = () => {
    setIframeVisible(false)
  }
=======
  useEffect(() => {
    getNews()
    getRestrooms()
  }, []);

>>>>>>> dev

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='/categories' element={<Categories />}/>
      <Route path='/mobility' element={<Mobility handleShowIframe={handleShowIframe} iframeVisible={iframeVisible}/>}/>
      <Route path='/caregivers' element={<Caregivers />}/>
      <Route path='/about' element={<About />}>
      </Route>
    </Routes>
    </>
  );
}

export default App;
