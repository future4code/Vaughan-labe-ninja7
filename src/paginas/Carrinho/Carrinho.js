import React from "react";
import {ContainerCards, Card} from '../ContrateJob/ContrateJob' 
import styled from 'styled-components'

const Main = styled.main`

display:grid;
grid-template-columns: repeat(4, 1fr);
margin: 5px;
padding: 5px;
justify-items: center;

`

export default class Carrinho extends React.Component {

    state = {
        itens: []

    }

    componentDidMount() {

        this.setState({ itens: this.props.recept })
    }




    render() {
        console.log(this.state.itens)
        const ItensCarrinho = this.state.itens.map((x, y) => {
            return (
               <ContainerCards key={y}>
                  <Card>
                     <h3>{x.title}</h3>
                     {x.description}
                     <h3>{x.price.toLocaleString('pt-BR',
                        { style: 'currency', currency: 'BRL' })} </h3>
                     Metodo de pagamento: {x.paymentMethods.map((x, y) => {
                        return (<>
                           <li key={y}>{x}</li>
                        </>
                        )
                     })}
                     <br />
                     {x.dueDate ? <p><strong>Prazo:</strong> {new Date(x.dueDate).toLocaleDateString()}</p> : "Carregando..."}
                  </Card>
                  <button onClick={() => this.props.remover(x.id)} >Remover Ninja</button>
               </ContainerCards>
            )
         })

        return (
            <>
                <div>NINJAS SELECIONADOS</div>
               <Main>{ItensCarrinho}</Main>
            </>

        )
    }
}

