import { Wrapper } from "./Mobility-styles";

const Mobility = ({handleShowIframe, iframeVisible}) => {
    console.log(iframeVisible)
    return(

        <Wrapper>
            <h1>Mobility Resources</h1>
            <h2>Food</h2>
                <button onClick={handleShowIframe}>Chicago Food Bank</button>
               <iframe className={iframeVisible ? 'visible' : 'food-bank'}src="https://www.chicagosfoodbank.org/">
                </iframe>
            <h2>Shelter</h2>
            <h2>Bathrooms</h2>
        </Wrapper>
    )
};

export default Mobility;