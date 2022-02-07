import React from "react"
import Home from './paginas/Home/Home'
import ContrateJob from './paginas/ContrateJob/ContrateJob'
import CadastreSeuJob from './paginas/CadastreSeuJob/CadastreSeuJob'
import DetalheJob from './paginas/DetalheJob/DetalheJob'
import Carrinho from "./paginas/Carrinho/Carrinho"
import Header from "./components/Header/Header"
import axios from "axios"
import { Key } from "./components/Header/Key"
import { BaseUrl } from "./components/Header/BaseUrl"

class App extends React.Component {
  state = {
    currentPage: "home",
    jobCarrinho: [],
    listaJobs: [],
  }

  
  componentDidMount() {

    this.getAllJobs()
    
 }


  changePage = (pageName) => {
    this.setState({ currentPage: pageName })
  }

  
  adicionarProduto = (x) => {
      
    const job = this.state.jobCarrinho.find(trabalho => x === trabalho.id)
    if (job) {
        alert("Ja existente !")
    } else {

       const adicionarJob = this.state.listaJobs.find(trabalho => x === trabalho.id)
       const novoJob = [...this.state.jobCarrinho, { ...adicionarJob }]
       this.setState({ jobCarrinho: novoJob })
      alert("Ninja adicionado !")
    }
 }

remove = (id) => {
  const canDelete = window.confirm("Tem certeza que deseja remover este Ninja?")
  if (canDelete){
    const car = this.state.jobCarrinho.filter((Item) => {
      return Item.id !== id
    })
    this.setState({ jobCarrinho: car })
  }
}

removeTudo = () => {
  const canDelete = window.confirm("Tem certeza que deseja remover todos Ninjas?")
  if (canDelete){
    const car = []
    this.setState({ jobCarrinho: car })
  }
  
}

finalizar = () => {
  const canFinish = window.confirm("Tem certeza que deseja realizar a compra ")
  if (canFinish){
    alert("Ninjas contratados !!!")
    const car = []
    this.setState({ jobCarrinho: car })
  }
}

  getAllJobs = () => {
  

    const url = `${BaseUrl}/jobs`
    axios
       .get(url, Key)
       .then((respostaPositiva) => {
          this.setState({ listaJobs: respostaPositiva.data.jobs })
       })
       .catch((erro) => {
          alert("algo deu errado contate o suporte para mais informaçoes", erro.data)
       })
 }

  choosePage = () => {
    switch (this.state.currentPage) {
      case "home":
        return <Home 
        contratar={() => this.setState({ currentPage: "listaJobs"})}
        cadastrar={() => this.setState({ currentPage: 'cadastre' }) }
        changePage={this.changePage}/>
      case "listaJobs":
        return <ContrateJob  entrada={this.state.listaJobs} botao={this.adicionarProduto}/>
      case "cadastre":
        return <CadastreSeuJob />
      case "carrinho":
        return <Carrinho finalizar={this.finalizar} remover={this.remove} removeTudo={this.removeTudo} bola={this.state.jobCarrinho} valor={this.state.jobCarrinho}/>
      case "detalhes":
        return <DetalheJob/>
      default:
        return <Home changePage={this.changePage}/>
    }
  }

  render() {
    return (
      <div>
        <Header changePage={this.changePage} />
        {this.choosePage()}
      </div>
    )
  }
}

export default App
