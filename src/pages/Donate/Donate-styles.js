import styled from "styled-components";

export const Wrapper = styled.div`
margin: 0px 40px;
    button {
        background: #002E5B;
        color: white;
        padding: 5px 20px;
        border-radius: 10px;
        font-size: 20px;
    }

    .donate-btn {
        background: #002E5B;
        color: white;
        padding: 5px 20px;
        border-radius: 10px;
        display: block;
        margin: 10px;
        font-size: 20px;
    }

    h4 {
        font-size: 26px;
        margin-top: 15px;
    }

    p {
        font-size: 16px;
        
    }

    .privacy {
        margin-top: 30px;
    }

    h2 {
        font-size: 36px;
    }

    .amount-btns {
        display: flex;
        gap: 20px;
    }
    label {
        margin-left: 20px;
    }
    input[type=text] {
        margin: 5px;
        border-radius: 5px;
        padding: 3px;
    }

    input[type=radio] {
        margin: 5px;
    }
`;