import styled from "styled-components";
export const Wrapper = styled.div`
    margin: 50px;
    
    .title {
        margin-bottom: 40px;
        word-spacing: 5px;
        font-size: 24px;
    }
    span {
        font-weight: bold;
        
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    
    .container {
        background-color: #034F96;
        color: white;
        border-radius: 5px;
        padding-left: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 70vh;
        width: 15vw;
    }
    
    iframe {
        display: none;
    }

    .active {
        display: block;
        width: 75vw;
        height: 70vh;
    }

    .active-btn {
        
    }

    p {
        cursor: pointer;
        font-size: 16px;
    }

    h2 {
        font-size: 28px;
    }
`;