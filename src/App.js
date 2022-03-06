import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home"; 
import Caregivers from "./pages/Caregivers/Caregivers";
import NavBar from './components/NavBar/NavBar';
import Categories from "./pages/Categories/Categories";
import Mobility from "./pages/Mobility/Mobility";
import About from "./pages/About/About";
import Donate from './pages/Donate/Donate';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='/categories' element={<Categories />}/>
      <Route path='/mobility' element={<Mobility />}/>
      <Route path='/shelters' element={<Caregivers />}/>
      <Route path='/about' element={<About />}>
      </Route>
      <Route path='/donate' element={<Donate />}></Route>
    </Routes>
    </>
  );
}

export default App;
