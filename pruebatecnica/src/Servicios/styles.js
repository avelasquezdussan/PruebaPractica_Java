import styled from 'styled-components';

export const TablaResultados = styled.table`
margin:auto;
width: 800px;
	border-collapse: collapse;
	overflow: hidden;
	box-shadow: 0 0 20px rgba(0,0,0,0.1);

    th,
td {
	padding: 15px;
	background-color: rgba(255,255,255,0.2);
	color: #000;
}

th {
	text-align: left;
}

thead {
	td {
		background-color: #55608f;
	}
}

tbody {
	tr {
		&:hover {
			background-color: rgba(255,255,255,0.3);
		}
	}
	td {
		position: relative;
		&:hover {
			&:before {
				content: "";
				position: absolute;
				left: 0;
				right: 0;
				top: -9999px;
				bottom: -9999px;
				background-color: rgba(255,255,255,0.2);
				z-index: -1;
			}
		}
	}
}
`;


export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #000000;
  font-family: fantasy;
`;

export const Select = styled.select`

  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border-radius: 10px;
  border: 1px solid rgb(196,196,196);
 

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const Button = styled.button`
  color: #55608f;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #55608f;
  border-radius: 3px;
`;

export const DivInformacionBasica = styled.div`
    display: block;
    max-width: 782px;
    width: 100%;
    margin: 20px auto 0px;
    border: 1px solid rgb(235, 235, 235);
    border-radius: 10px;
    padding: 30px 50px;
`;

export const TituloFormulario = styled.h3`

font-family: Georgia, 'Times New Roman', Times, serif;
    color: rgb(0, 0, 0);
    font-size: 18px;
    margin-bottom: 25px;
    text-align: left;
    `;

export const DivGrid = styled.div`
display: grid;
    margin: 0 -10px;
    grid-template-columns: repeat(3, 1fr);
    `;

export const DivGridItem = styled.div`
position: relative;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    display: flex;
    min-height: 1px;
    order: 1;
    box-sizing: border-box;
    flex-direction: column;

    `;
export const Label = styled.h3`
text-align: left;
font-family: Georgia, 'Times New Roman', Times, serif;
font-size: 14px;
color: rgb(112, 112, 112);

`;

export const Input = styled.input`
height: 40px;
    width: 100%;
    border-radius: 10px;
    border: 1px solid rgb(196, 196, 196);
    padding: 10px 10px;
    background-color: rgb(248, 248, 248);
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 14px;
    box-sizing: border-box;

`;