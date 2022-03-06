import { Wrapper, Content } from "./Mobility-styles";
import { useState } from "react";

const Mobility = () => {
    const [activeIndex, setActiveIndex ] = useState(null)

    const handleActive = (index) => {
        setActiveIndex(index)
    }
    return(

        <Wrapper>
            <p className="title">Resources  >  <span>Mobility</span></p>
            <Content>
            <div className="container">
            <h2>Mobility</h2>
                <p className={activeIndex === 0 ? 'active-btn' : ''} onClick={() => handleActive(0)}>Wheelchairs for Ukraine</p>
                <h2>Medications</h2>
                <p className={activeIndex === 3 ? 'active-btn' : ''} onClick={() => handleActive(3)}>Medication Delivery Service</p>
            <h2>Bathrooms</h2>
                <p className={activeIndex === 1 ? 'active-btn' : ''} onClick={() => handleActive(1)}>Changing Places: Global map of peer-approved accessible bathrooms</p>
            <h2>Food</h2>
                <p className={activeIndex === 2 ? 'active-btn' : ''} onClick={() => handleActive(2)}>Freedge: Find free fridges around the world</p>

           
            </div>
            <div>
            <iframe title='2' className={activeIndex === 0 ? 'active' : ''}src="https://www.uuarc.org/our-programs/wheelchairs-for-ukraine/">
            </iframe>
            <iframe title='1' className={activeIndex === 1 ? 'active' : ''}src="https://app.changingplacesinternational.org/?_gl=1*tbj2i9*_ga*MTgxMDk0MjUxOS4xNjQ2NTA2OTQ2*_ga_V95MH8RCV2*MTY0NjUwNjk0Mi4xLjEuMTY0NjUwNjk4OC4w"></iframe>
            <iframe title='2' className={activeIndex === 2 ? 'active' : ''}src="https://freedge.org/"></iframe>
            <iframe title='3' className={activeIndex === 3 ? 'active' : ''}src="https://ukrposhta.ua/en/dostavka-likiv"></iframe>
            
            </div>
            </Content>
        </Wrapper>
    )
};

export default Mobility;