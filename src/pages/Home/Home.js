import { Link } from "react-router-dom";
import { Img , Wrapper, Button, Icons} from './Home-styled';


const Home = () => {
    return(
        <Wrapper>
            
            <Img src= "/eva.png"/>
            <div classname='btn-container'>
            <Link to='/categories'>
            <Button>Find Resources
                <Icons src='/info_icon.png' 
                alt="info icon" /> </Button>
            </Link>
            <Link to='/shelters'>
            <Button> Find Shelter 
                <Icons src='/emergency-post-svgrepo-com 2.png' 
                alt="Shelter" /> 
            </Button>
            </Link>
            </div>
        </Wrapper>
    )
};

export default Home;