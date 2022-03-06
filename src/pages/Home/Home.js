import { Link } from "react-router-dom";
import { Img , Wrapper, Button, Icons} from './Home-styled';


const Home = () => {
    return(
        <Wrapper>
            
            <Img src= "/eva.png"/>
            <Link to='/caregivers'>
            <Button> Get Care 
                <Icons src='/Nurse_Icon.png' 
                alt="React Logo" /> 
            </Button>
            </Link>
            <Link to='/categories'>
            <Button>Get Resources
                <Icons src='/info_icon.png' 
                alt="React Logo" /> </Button>
            </Link>
        </Wrapper>
    )
};

export default Home;