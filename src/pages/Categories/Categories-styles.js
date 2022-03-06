import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 40px;

    h2 {
        font-size: 36;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    .box {
        background: #034F96;
        color: white;
        font-size: 22px;
        width: 236px;
        height: 236px;
        padding: 10px;
        margin: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 5%;
    }


`;