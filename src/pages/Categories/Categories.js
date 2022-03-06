import {Wrapper, Content} from './Categories-styles';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <Wrapper>
           <h2>I need help with:</h2> 
           <Content>
               <Link to='/mobility'>
               <div className='box'>
                <p>Mobility/Physical</p>
                <img src='/wheelchair-icon.png' alt='wheelchair icon'/>
               </div>
               </Link>
                <div className='box'>
                <p>Spinal Cord/SCI</p>
                <img src='/Spinal Icon.png' alt='spinal icon'/>
               </div>
               <div className='box'>
                <p>Head Injuries/TBI</p>
                <img src='/head-svgrepo-com-2 1.png' alt='head injury icon'/>
               </div>
               <div className='box'>
                <p>Vision</p>
                <img src='/Low vision icon.png' alt='low vision icon'/>
               </div>
               <div className='box'>
                <p>Hearing</p>
                <img src='/hearing-icon.png' alt='hearing icon'/>
               </div>
               <div className='box'>
                <p>Cognitive/Learning</p>
                <img src='/cognitive-learning-icon.png' alt='learning icon'/>
               </div>
               <div className='box'>
                <p>Psychological</p>
                <img src='/brain-svgrepo-com 2.png' alt='head icon'/>
               </div>
               <div className='box'>
                <p>Invisible</p>
                <img src='/Invisible icon.png' alt='invisible icon'/>
               </div>
           </Content>
        </Wrapper>
    )
}

export default Categories;