import React from 'react';
import {BaseUrl} from '../../components/Header/BaseUrl'
import  {Key} from '../../components/Header/Key';
import axios from 'axios';
import styled from 'styled-components'

const ContainerCards = styled.div`

height: 50vh;
width: 20vw;
border: 1px black solid;
margin: 5px;
padding: 5px;
`
const Main = styled.main`

display:grid;
grid-template-columns: repeat(5, 1fr);
margin: 5px;
padding: 5px;

`


export default class ContrateJob extends React.Component {

   state = {

      listaJobs: []
   }

   componentDidMount() {

      this.getAllJobs()
   }

   getAllJobs = () => {

      const url = `${BaseUrl}/jobs`
      axios
         .get(url, Key)
         .then((respostaPositiva) => {
            console.log(respostaPositiva)
            this.setState({ listaJobs: respostaPositiva.data.jobs })
         })
         .catch((erro) => {
            console.log("algo deu errado")
         })
   }


   render() {

      const Cards = this.state.listaJobs.map((x, y) => { 


         return (
            <ContainerCards 
            key={y}>
            <h3>{x.title}</h3>
            {x.description}
            </ContainerCards>

         )
      }) 

      return (

         <>
            <div>ESTA PAGINA E A PAGINA DE CONTRATAR</div>
            <Main>{Cards}</Main>
            
            <button onClick={() => this.getAllJobs() } >Clicar</button>
         </>
         
      )
   }
}
