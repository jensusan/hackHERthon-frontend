import styled from "styled-components"

export const Img = styled.img`
width: 568px;
height: 116.56px;
`;
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content:space-evenly; // centers in the flex direction and the default flex-direction is row
align-items:center; // centers perpendicular to the flex direction
height: 100vh; // 100% view height
width: 100vw; // 100% view width
position: absolute;
`;

export const Button = styled.button`
  position: relative;
  height: 220px;
  width: 220px;
  border-radius: 5% ;
  border: none;
  margin: 0px 50px;

  color: #FFFFFF;
  background-color: #034F96 ;
  cursor: pointer;
  font-size: 22px;
  font-family: 'Poppins', sans-serif;


`
export const Icons = styled.img`
  height:100px;
  width: 100px;
  margin-top: 20px;
  

`