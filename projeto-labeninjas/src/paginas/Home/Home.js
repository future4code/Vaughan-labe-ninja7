import React from "react";

class Home extends React.Component {
    render(){
        return(
            <HomePageContainer>
                <h1>LabeNinjas</h1>
                <h3>Tudo o que você precisa a um click de distância</h3>
                <div>
                    <button onClick={() => this.props.changePage("form")}>Quero oferecer meu serviço</button>
                    <button onClick={() => this.props.changePage("list")}>Quero contratar um serviço</button>
                </div>
            </HomePageContainer>
        )
    }
}

export default Home