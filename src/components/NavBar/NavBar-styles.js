import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px;
    border-bottom: solid black 2px;

    h1 {
        padding-bottom: 10px;
    }

`;

export const Content = styled.div`
    margin-right: 50px;
    ul {
    display: flex;
    gap: 150px;
    list-style: none;
    text-decoration: none;
    
    
    }

    li {
     text-decoration: none;
     color: black;
     font-size: 20px;
    }

    li:hover {
        font-size: 25px;
    }


    
`;