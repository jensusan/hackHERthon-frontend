import {Wrapper, Content} from './Categories-styles';

const Categories = () => {
    return (
        <Wrapper>
           <h2>I need help with:</h2> 
           <Content>
               <div className='box'>
                <p>Mobility/Physical</p>
               </div>
                <div className='box'>
                <p>Spinal Cord/SCI</p>
               </div>
               <div className='box'>
                <p>Head Injuries/TBI</p>
               </div>
               <div className='box'>
                <p>Vision</p>
               </div>
               <div className='box'>
                <p>Hearing</p>
               </div>
               <div className='box'>
                <p>Cognitive/Learning</p>
               </div>
               <div className='box'>
                <p>Psychological</p>
               </div>
               <div className='box'>
                <p>Invisible</p>
               </div>
           </Content>
        </Wrapper>
    )
}

export default Categories;