import styled from "styled-components";


export const Container = styled.div`  // container principal, onde fica todo o conteúdo da página, com fundo preto, e com o tamanho da tela,
        background-color: #181f36;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;   // espaçamento entre os elementos
        padding: 20px;

`

export const Title = styled.h2`
        color: #fff;
        text-align: center;
        font-size: 38px;
        font-style: normal;
        font-weight: 600;
        margin: 20px 0;

`

export const ContainerUsers = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;

        @media (max-width: 750px) {       //responsividade
            grid-template-columns: 1fr;
            
        }
`

export const CardUsers = styled.div`  // card de usuários
        background: linear-gradient(180deg, #fe7e5d 0%, #7f3841 100%);
        padding: 14px;
        border-radius: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between; // espaçamento entre os elementos
        gap: 30px;
        max-width: 400px;
        margin: 10px;

        p{
            color:#fff;
            font-size: 16px;
            font-weight: 200;

        }

        h3{
            color:#fff;
            font-size: 24px;
            margin-bottom: 3px;
            text-transform: capitalize;
        }

`

export const TrashIcon = styled.img`
        cursor: pointer;
        padding-left: 10px;
       

        &:hover{
            opacity: 0.8;
        }


`

export const AvatarUsers = styled.img`
        height: 80px;



`