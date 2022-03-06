import styled from "styled-components";
export const Wrapper = styled.div`
    margin: 40px;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    .container {
        background-color: #034F96;
        color: white;
    }
    
    iframe {
        display: none;
    }

    .active {
        display: block;
    }

    .active-btn {
        
    }

    p {
        cursor: pointer;
    }
`;