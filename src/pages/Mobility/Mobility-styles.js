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
        display: flex;
        flex-direction: column;
        height: 70vh;
        width: 15vw;
        gap: 2px;
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
        display: flex;
        align-items: center;
        background-color:  white;
        color: #034F96;
        padding-left: 25px;
    }

    p {
        cursor: pointer;
        font-size: 16px;
        padding-left: 25px;
    }

    h2 {
        font-size: 28px;
        padding-left: 25px;
        padding-top: 20px;
    }
`;