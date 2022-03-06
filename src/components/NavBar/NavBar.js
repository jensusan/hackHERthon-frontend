import { Link } from "react-router-dom";
import {Wrapper, Content, Img} from './NavBar-styles';

const NavBar = () => {
    return(
        <Wrapper>
        <Img src= "/eva.png"/>
        <Content>
        <ul>
            <Link to='/caregivers' style={{ textDecoration: 'none' }}>
            <li>Care</li>
            </Link>
            <Link to='/categories' style={{ textDecoration: 'none' }}>
            <li>Resources</li>
            </Link>
            <Link to='/about' style={{ textDecoration: 'none' }}>
            <li>About</li>
            </Link>
        </ul>
        </Content>
        </Wrapper>
    )
}

export default NavBar;