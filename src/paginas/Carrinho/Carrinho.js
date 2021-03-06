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

const ButtonContainer = styled.div`

display:flex;

`

export default class Carrinho extends React.Component {



    render() {
      const total = this.props.valor.reduce((total, valor) => total + valor.price, 0);

        const ItensCarrinho = this.props.bola.map((x, y) => {
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
                  <button onClick={() => this.props.remover(x.id) } >Remover Ninja</button>
               </ContainerCards>
            )
         })

        return (
            <>
                <div>NINJAS SELECIONADOS¬†¬†¬†   Valor Total: {total}</div>
               <Main>{ItensCarrinho}</Main>
              { total ? <ButtonContainer>
               <button onClick={() => this.props.finalizar()}>Finalizar compra</button>
               <button onClick={() => this.props.removeTudo()}>Remover todos</button> 
              </ButtonContainer> : <ButtonContainer>Vazio</ButtonContainer> }
            </>

        )
    }
}

