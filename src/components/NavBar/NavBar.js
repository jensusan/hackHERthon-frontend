import { Link } from "react-router-dom";
import {Wrapper, Content, Img} from './NavBar-styles';

const NavBar = () => {
    return(
        <Wrapper>
            <Link to='/'>
            <Img src= "/eva.png"/>
        </Link>
        <Content>
        <ul>
            <Link to='/categories' style={{ textDecoration: 'none' }}>
            <li>Resources</li>
            </Link>
            <Link to='/shelters' style={{ textDecoration: 'none' }}>
            <li>Shelters</li>
            </Link>
            <Link to='/about' style={{ textDecoration: 'none' }}>
            <li>About</li>
            </Link>
            <Link to='/donate' style={{ textDecoration: 'none' }}><li>Donate</li>
            </Link>
        </ul>
        </Content>
        </Wrapper>
    )
}

export default NavBar;