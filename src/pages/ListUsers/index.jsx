
import { useEffect, useState } from "react" 

import { useNavigate } from "react-router-dom"

import api from "../../services/api"
 
import  Button  from "../../components/Button"
import TopBackground from "../../components/TopBackground"

import Trash from "../../assets/trash.svg"

import { Container, ContainerUsers, Title, CardUsers, TrashIcon, AvatarUsers } from "./styles"



function ListUsers() { 

  const [users, setUsers] = useState([])
  const navigate = useNavigate()

useEffect(() => {

  async function getUsers(){ //função assincrona para buscar os usuários
      const {data} = await api.get('/usuarios')
      
      setUsers(data)
  }

 getUsers()
    
}, [])


  async function deleteUsers(id){            //função para deletar usuários
    await api.delete(`/usuarios/${id}`)

    const upadateUsers = users.filter((user) => user.id !== id) //filtra os usuários que não foram deletados
    setUsers(upadateUsers)
  }


  return (    //retorno da função
        <Container>  
          <TopBackground />  
      <Title>Lista de Usuários</Title>
      
    <ContainerUsers> 

      {users.map ((user) => (  //map é um método que percorre um array e retorna um novo array com os elementos modificados, aqui vai servir mostrar o array na tela

          <CardUsers  key={user.id}> 
              <AvatarUsers src= {`https://avatar.iran.liara.run/public/boy?username=${user.id}`}  alt="avatar" />
            <div>   
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div> 
            <TrashIcon src = {Trash} alt="lixeira" onClick={() => deleteUsers(user.id)}/>

            </CardUsers>
    ))}

    </ContainerUsers>

          <Button type='button' onClick={() => navigate('/')}>Voltar</Button>
        </Container>
  )
}

export default ListUsers




// toda vez que a tela carrega, o useEffect é executado
// toda vez que uma variavel é alterada, o useEffect é executado
// para usar o useEffect com async await, é necessario criar uma função dentro do useEffect
// key é uma propriedade que serve para identificar o elemento, no caso o id do usuário







 