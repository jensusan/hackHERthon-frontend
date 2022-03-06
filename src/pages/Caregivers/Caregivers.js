import { Wrapper, Content } from "../Mobility/Mobility-styles";
import { useState } from "react";

const Caregivers = () => {
        const [activeIndex, setActiveIndex ] = useState(null)

        const handleActive = (index) => {
            setActiveIndex(index)
        }
        return(
    
            <Wrapper>
                <p className="title">Resources  >  <span>Shelter</span></p>
                <Content>
                <div className="container">
                <h2>Shelter</h2>
                    <p className={activeIndex === 0 ? 'active-btn' : ''} onClick={() => handleActive(0)}>UN Refugee Agency: Find shelter in Ukraine</p>
    
                    <p className={activeIndex === 1 ? 'active-btn' : ''} onClick={() => handleActive(1)}>Prykhystok (Shelter): share housing with those who lost it due to shelling, or find shelter for yourself</p>
            
                </div>
                <div>
                <iframe title='0' className={activeIndex === 0 ? 'active' : ''}src="https://help.unhcr.org/ukraine/list-of-organizations-ready-to-provide-shelter/">
                </iframe>
                <iframe title='1' className={activeIndex === 1 ? 'active' : ''}src="https://visitukraine.today/blog/99/prykhystok-shelter-share-housing-with-those-who-lost-it-due-to-shelling-or-find-shelter-for-yourself"></iframe>
                
                </div>
                </Content>
            </Wrapper>
        )
};

export default Caregivers;