import { useRef } from 'react'; 
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { Title, Container, Form, ContainerInputs,  Input, InputLabel   } from './styles'
import  Button  from '../../components/Button'
import TopBackground from '../../components/TopBackground'





function Home() { // no react componentes  sempre com a primeira letra maiuscula, dentro de function cria arquivos JS. Depois de return arquivos Js com html

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

    async function registerNewUser(){
      await api.post('/usuarios', {
          name: inputName.current.value,
          age: parseInt (inputAge.current.value),  // parseInt transforma em número inteiro, ele vai como padrao string
          email: inputEmail.current.value
    })
   
    
  }
    

  return ( //dentro return é o que vai ser renderizado na tela, cod jsx é html, js e CSS tudo junto. 
          // Dentro do return sempre tem que ter um elemento pai ou  um fragment (<> </>)

      <Container>
        <TopBackground />
       
     

    <Form>
      <Title>Cadastrar Usuários</Title>
   

    <ContainerInputs>
      
      <div>
        <InputLabel>
           Nome <span> *</span> 
           </InputLabel>   
            <Input type = 'text' placeholder='Nome do usuário' ref={inputName}/>      
        
     </div>

    <div>
      <InputLabel>
          Idade <span> *</span>
           </InputLabel>
        <Input type='number' placeholder='Idade do usuário' ref={inputAge}/>
    
    </div>
    

    </ContainerInputs>

     
     <div style={{ width: "100%" }}>  
          <InputLabel>
            E-mail <span> *</span>
          </InputLabel>
          <Input type="text" placeholder="Email do usuário" ref={inputEmail}/> 
     </div>

    
    <Button type='button' onClick={registerNewUser} theme="primary" >Cadastrar Usuário</Button> 
    </Form>

           
    <Button type='button' onClick={() => navigate('/Lista-de-usuarios')}  >Ver lista de usuários</Button>
    </Container>
  )
}

export default Home;


// Existem duas maneiras exportar um componente: 
// export default (Padrão) => exporta apenas um componente, não de chaves
//  e export => exporta varios componentes, coloca o export antes de cada componente(function), precisa das chaves, com o nome correto do componente

//ref={inputName} é uma referência para o inputName, ref é uma propriedade do react que permite acessar o elemento do DOM. 


/*Ex: ali no primeiro button /no react precisa passar uma função no onClick, é assim, entre chaves SEM parenteses.

Ex: no segundo button   /  Se precisar passar a função com algum parametro,  usa o () com arrow function.

Para navegar entre as paginas, tem que importar o useNavigate do react-router-dom, cria uma variavel e chama o useNavigate, e depois chama a função navigate e passa o caminho da pagina que quer navegar
*/