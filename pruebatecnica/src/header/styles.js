import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #000000;
  font-family: fantasy;
`;

export const DivHeader = styled.div`
  
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    visibility: visible;
    opacity: 1;
    transition: opacity .4s,visibility .4s;

`;

export const DivNavBar = styled.div`
  
flex-grow: 1;
    display: flex;
`;

export const NavBarItem = styled.a`
  
position: relative;
display: block;
text-decoration: none;
padding: 20px 0;
margin: 0 25px;
cursor: pointer;
white-space: nowrap;
box-sizing: border-box;
transition: all .4s ease-out;

span{
    color: #000000;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-style: 20px;
}

:hover{
    span{
    color: red;
    }
}

`;

