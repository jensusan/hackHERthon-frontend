import {Wrapper, Content} from './About-styles';

const About = () => {
    return(
        <Wrapper>
            <Content>
                <h2>Safety shouldn’t come with barriers.</h2>
                <h2>That’s why we’re here to help remove them.</h2>
                <div className="boxes">
                    <p>One billion people,
15% of the world's population, experience some form of disability.</p>
<p>One billion people,
15% of the world's population, experience some form of disability.</p>
<p>Some people are have difficulty accessing essential resources because of their disability.</p>
                    </div>
                 <h2>How do we do this?</h2>   
                 <div className="content-container"><div className="paragraphs">
                     <p>Evac-Ability aims to knock down the barriers that block people with disabilities from accessing their right to safety. </p><p>

We spoke to real people - from the mother of a non-speaking autistic child, to a young adult with sensory and mobility issues. They wanted a way to access relevant, reliable safety information during times of crisis. </p></div>
<div className="list-content">
    <p>We connect people with disabilities to the information they need, right where they are:</p>
    <ul>
        <li>Nearby emergency shelters</li>
        <li>  Accessible restroom locations</li>
        <li>Food pantries/distribution</li>
        <li>Delivery of medicines, medical equipment, vitamins, and hygiene products</li>
    </ul>
    </div>
                     </div>
            </Content>
        </Wrapper>
    )
}

export default About;