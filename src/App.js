import {Routes, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home"; 
const axios = require('axios');

function App() {
  const [news, setNews] =
  useState([])

  async function getNews() {
    try {
      const response = await axios.get('https://gnews.io/api/v4/search?q=example&token=bdd052cc7d96e3f1b8e81224b79e1f30&lang=en')
      console.log(response.data)
    } catch (error) {
      console.log(error)
    };
  };

  useEffect(() => {
    getNews()
  });


  return (
    <Routes>
      <Route path='' element={<Home />} />
    </Routes>
  );
}

export default App;
