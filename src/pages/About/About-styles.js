import styled from 'styled-components';

export const Wrapper = styled.div`
   margin: 0px 50px;
    
`;

export const Content = styled.div`
h2 {
    text-align: center;
    color: #002E5B;
    font-size: 36px;
    margin: 10px 300px;
}

.boxes {
    display: flex;
    gap: 40px;
    color: white;
    justify-content: center;
    
   
}

.boxes p {
    background-color: #002E5B;
    border-radius: 10px;
    padding: 25px 30px;
    font-size: 26px;
    text-align: center;
    
}

.content-container {
    display: flex;
    gap: 60px;
    font-size: 20px;
}

.paragraphs {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50vw;
}

.list-content p {
    margin-bottom: 10px;
}
`;