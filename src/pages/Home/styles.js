import styled from 'styled-components'





export const Title = styled.h2`
        color: #fff;
        text-align: center;
        font-size: 38px;
        font-style: normal;
        font-weight: 600;
`

export const Container = styled.div` // container principal,fundo da tela
        background-color:#181f36;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-evenly; // espaçamento estre os intens
        padding: 20px;
        height: 100vh;


`



export const Form = styled.form`  // form com o titulo e os inputs
        display:flex;
        flex-direction:column;
        align-items:center;
        gap: 20px;
        max-width: 500px;
`

export const ContainerInputs = styled.div`  // container dos inputs nome e idade
        display: flex;
        gap: 20px;
`

export const Input = styled.input`  // input do email
        border-radius: 10px;
        border: 1px solid #d2dae2;border-radius: 10px;
        border: 1px solid #d2dae2;
        background-color: #fff;
        padding: 12px 20px;
        outline: none;
        width: 100%;
        background-color: #fff;
        padding: 12px 20px;
        outline: none;
        width: 100%;

        
`



export const InputLabel = styled.label`  // label do nome*, idade* e email*
        color: #fff;
        font-size: 16px;
        font-weight: 500;


        span{
            color: #ef4f45;
            font-weight: bold;
        }
`





