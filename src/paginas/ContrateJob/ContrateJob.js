import React from 'react';

import styled from 'styled-components'

export const Card = styled.div`

display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
height: 50vh;
width: 20vw;


`

export const ContainerCards = styled.div`
margin: 5px;
padding: 5px;
border: 1px black solid;
display:flex;
flex-direction: column;
align-items: center;
`


export const Main = styled.main`

display:grid;
grid-template-columns: repeat(4, 1fr);
margin: 5px;
padding: 5px;
justify-items: center;
`

export const ConteinerInputs = styled.div`

margin: 10px;

`

export const Inputs = styled.div`

display:flex;
background-color : gray;
justify-content: center;
align-items: center;
`

export default class ContrateJob extends React.Component {

   state = {

      listaJobs: [],
      query: '',
      priceMin: '',
      priceMax: '',
      sortingParameter: '',
      jobCarrinho: [],
   }

   componentDidMount() {
      this.props.getAllJobs()
    }

   updateQuery = (ev) => {

      this.setState({ query: ev.target.value })
   }

   miniPrice = (ev) => {

      this.setState({ priceMin: ev.target.value })
   }

   maxPrice = (ev) => {

      this.setState({ priceMax: ev.target.value })
   }

   sortingParameter = (ev) => {

      this.setState({ sortingParameter: ev.target.value })
   }


   componentDidMount() {

      this.setState({ listaJobs: this.props.entrada })
      
   }



   render() {

      console.log(this.state.jobCarrinho)

      const Cards = this.state.listaJobs
         .filter((job) => {
            return job.title.toLowerCase().includes(this.state.query.toLowerCase()) ||
               job.description.toLowerCase().includes(this.state.query.toLowerCase())
         })
         .filter(job => {
            return this.state.priceMin === "" || job.price >= this.state.priceMin
         })
         .filter(job => {
            return this.state.priceMax === "" || job.price <= this.state.priceMax
         })
         .sort((a, b) => {
            return this.state.sortingParameter === "Minprice" ? a.price - b.price : ""
         })
         .sort((a, b) => {
            return this.state.sortingParameter === "Maxprice" ? b.price - a.price : ""
         })
         .sort((a, b) => {
            return this.state.sortingParameter === "dueDate" ? new Date(a.dueDate) - new Date(b.dueDate) : ""
         })
         .sort((a, b) => {
            return this.state.sortingParameter === "title" ? a.title.localeCompare(b.title) : ""
         })
         .map((x, y) => {
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
                  <button onClick={() => this.props.botao(x.id)} >Adicionar Ninja</button>
               </ContainerCards>
            )
         })

      return (

         <>
            <div>ESTA PAGINA E A PAGINA DE CONTRATAR
               <Inputs>
                  <ConteinerInputs><input onChange={this.updateQuery} value={this.state.query} placeholder='Pesquisar por nome'></input></ConteinerInputs>
                  <ConteinerInputs><input onChange={this.miniPrice} value={this.state.priceMin} type="number" placeholder='Digite o valor minimo'></input></ConteinerInputs>
                  <ConteinerInputs><input onChange={this.maxPrice} value={this.state.priceMax} type="number" placeholder='Digite o valor maximo'></input></ConteinerInputs>
                  <span>
                     <label for="sort"> Ordenaçao: </label>
                     <select name="sort" value={this.state.sortingParameter} onChange={this.sortingParameter} >
                        <option value="" >Vazio</option>
                        <option value="title" >Titulo</option>
                        <option value="Minprice" >Crescente</option>
                        <option value="Maxprice" >Decrescente</option>
                        <option value="dueDate" >Prazo</option>
                     </select>
                  </span>
               </Inputs>
            </div>
            <Main>{Cards}</Main>
         </>
      )
   }
}
