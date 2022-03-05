import {Routes, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home"; 
import News from "./pages/News";
import Caregivers from "./pages/Caregivers";
import NavBar from "./components/NavBar";
import Restrooms from "./pages/Restrooms";
const axios = require('axios');

function App() {
  const [news, setNews] =
  useState([]);
  const [restrooms, setRestrooms] = useState([]);

  async function getNews() {
    try {
      const response = await axios.get('https://gnews.io/api/v4/top-headlines?token=bdd052cc7d96e3f1b8e81224b79e1f30&lang=en')
      setNews(response.data)
    } catch (error) {
      console.log(error)
    };
  };

  async function getRestrooms() {
    try {
      const response = await axios.get('https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=10&offset=0&ada=false&unisex=false&lat=41.8781&lng=-87.6298')
      setRestrooms(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    
  });


  return (
    <>
    <NavBar />
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='/news' element={<News news={news}/>}/>
      <Route path='/caregivers' element={<Caregivers />}/>
      <Route path='/restrooms' element={<Restrooms restrooms={restrooms}/>}/>
    </Routes>
    </>
  );
}

export default App;
