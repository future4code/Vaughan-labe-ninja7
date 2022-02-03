import React from "react";
import styled from 'styled-components'

const HomePageContainer = styled.div`


`

class Home extends React.Component {

    render(){
        
        return(
            <HomePageContainer>
                <h1>LabeNinjas</h1>
                <h3>Tudo o que você precisa a um click de distância</h3>
                <div>
                    <button onClick={ this.props.cadastrar }>Quero oferecer meu serviço</button>
                    <button onClick={ this.props.contratar }>Quero contratar um serviço</button>
                </div>
            </HomePageContainer>
        )
    }
}

export default Home
