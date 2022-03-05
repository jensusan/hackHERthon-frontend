import { Link } from "react-router-dom";

const Home = () => {
    return(
        <>
            <h1>Home</h1>
            <Link to='/caregivers'>
            <button>Get Care</button>
            </Link>
            <button>Get Resources</button>
        </>
    )
};

export default Home;