import React from "react"
import Home from './paginas/Home/Home'
import ContrateJob from './paginas/ContrateJob/ContrateJob'
import CadastreSeuJob from './paginas/CadastreSeuJob/CadastreSeuJob'
import DetalheJob from './paginas/DetalheJob/DetalheJob'
import Carrinho from "./paginas/Carrinho/carrinho"
import Header from "./components/Header"


class App extends React.Component {
  state = {
    currentPage: "home",
   
  }

  changePage = (pageName) => {
    this.setState({ currentPage: pageName })
  }

  choosePage = () => {
    switch (this.state.currentPage) {
      case "home":
        return <Home changePage={this.changePage}/>
      case "listaJobs":
        return <ContrateJob/>
      case "cadastre":
        return <CadastreSeuJob />
      case "carrinho":
        return <Carrinho/>
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
