import { Link } from "react-router-dom";

const Home = () => {
    return(
        <>
            <h1>Home</h1>
            <Link to='/caregivers'>
            <button>Get Care</button>
            </Link>
            <Link to='/categories'>
            <button>Get Resources</button>
            </Link>
        </>
    )
};

export default Home;