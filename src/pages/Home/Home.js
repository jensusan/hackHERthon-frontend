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
                alt="React Logo" /> </Button>
            </Link>
            <Link to='/shelters'>
            <Button> Find Shelter 
                <Icons src='/Nurse_Icon.png' 
                alt="React Logo" /> 
            </Button>
            </Link>
            </div>
        </Wrapper>
    )
};

export default Home;