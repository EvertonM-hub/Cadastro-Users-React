import styled from "styled-components";

export const Button = styled.button` // botão de cadastrar
        background: ${(props) => props.theme ==='primary' ? 'linear-gradient(to right, #fe7e5d, #7f3841)' : 'transparent'} ;
        border: 1px solid #d2dae2;
        border-radius: 30px;
        padding: 16px 32px;
        font-size: large;
        color:#fff;
        width: fit-content; // ajusta o tamanho do botão
        cursor: pointer;


        &:hover {
            ${(props) => props.theme === 'primary' ? 'opacity: 0.8' : 'background: linear-gradient(to right, #fe7e5d, #7f3841)'};
        }

        &:active{
            opacity: 0.5;
        }
`