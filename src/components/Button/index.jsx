import { Button } from './styles.js'   


function DefaultButton({children, theme, ...props}){   //spred operator, children é o texto dentro do botão,  props é o restante das propriedades
//typeScript -> é o JS com tipagem (tipos de dados)
    return(
        <Button { ...props} theme={theme}> {children} </Button>
    )
}

export default DefaultButton

