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
            <h2>Food</h2>
                <p className={activeIndex === 0 ? 'active-btn' : ''} onClick={() => handleActive(0)}>Article 1</p>

                <p className={activeIndex === 1 ? 'active-btn' : ''} onClick={() => handleActive(1)}>Article 2</p>

                <p className={activeIndex === 2 ? 'active-btn' : ''} onClick={() => handleActive(2)}>Article 3</p>

            <h2>Shelter</h2>
                <p className={activeIndex === 3 ? 'active-btn' : ''} onClick={() => handleActive(3)}>Article 4</p>

            <h2>Bathrooms</h2>
                <p className={activeIndex === 4 ? 'active-btn' : ''} onClick={() => handleActive(4)}>Chicago Food Bank</p>
            </div>
            <div>
            <iframe className={activeIndex === 0 ? 'active' : ''}src="https://www.chicagosfoodbank.org/">
            </iframe>
            <iframe className={activeIndex === 1 ? 'active' : ''}src="https://www.chicagosfoodbank.org/"></iframe>
            <iframe className={activeIndex === 2 ? 'active' : ''}src="https://www.chicagosfoodbank.org/"></iframe>
            <iframe className={activeIndex === 3 ? 'active' : ''}src="https://www.chicagosfoodbank.org/"></iframe>
            <iframe className={activeIndex === 4 ? 'active' : ''}src="https://www.chicagosfoodbank.org/"></iframe>
            <iframe className={activeIndex === 5 ? 'active' : ''}src="https://www.chicagosfoodbank.org/"></iframe>
            <iframe className={activeIndex === 6 ? 'active' : ''}src="https://www.chicagosfoodbank.org/"></iframe>
            </div>
            </Content>
        </Wrapper>
    )
};

export default Mobility;