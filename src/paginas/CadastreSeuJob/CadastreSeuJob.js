import React from "react";
import styled from "styled-components";
import { BaseUrl } from "../../components/Header/BaseUrl";
import axios from "axios";
import { Key } from "../../components/Header/Key";

const ContainerForm = styled.div`

display:flex;
flex-direction: column;
align-items: center;

`

export default class CadastreSeuJob extends React.Component {

    state = {

        title: "",
        description: "",
        price: 0,
        paymentMethods: [],
        dueDate: "",
    }


    Data = (event) => {
        this.setState({ dueDate: event.target.value })
    }

    Titulo = (event) => {
        this.setState({ title: event.target.value })
    }

    Descricao = (event) => {
        this.setState({ description: event.target.value })
    }

    FormaPagamento = (event) => {
        const pagamento = []
        pagamento.push(event.target.value)
        this.setState({ paymentMethods: pagamento });
    }

    Preco = (event) => {
        const valor = Number(event.target.value)
        this.setState({ price: valor })
    }


    Cadastro = () => {

        const url = `${BaseUrl}/jobs`
        const body = {
            title: this.state.title,
            description: this.state.description,
            price: this.state.price,
            paymentMethods: this.state.paymentMethods,
            dueDate: this.state.dueDate,
        }
        axios.post(url,body,Key)
            .then((resp) => {
                alert("serviço cadastrado com sucesso !")
            })

            .catch((error) => {
                console.log(error)
                alert('Não foi possivel fazer o cadastro, tente novamente')
            })
    }

    render() {

        return (
            <>
                <ContainerForm>
                    <h2> Cadastre seu Serviço! </h2>
                    Serviço
                    <input value={this.state.title} onChange={this.Titulo} placeholder="Titulo do produto" />
                    <br></br>
                    Descricao do serviço
                    <input value={this.state.description} onChange={this.Descricao} placeholder="Descrição do produto" />
                    <br></br>
                    Valor
                    <input type="number" value={this.state.price} onChange={this.Preco} placeholder="Preço do produto" />
                    <br></br>
                    <form>
                        <select onChange={this.FormaPagamento}>
                            <option value=""> Escolha </option>
                            <option value="pix"> PIX </option>
                            <option value="boleto"> BOLETO </option>
                            <option value="debito"> DEBITO </option>
                            <option value="credito"> CREDITO </option>
                            <option value="paypal"> PAYPAL</option>
                        </select>
                        <br></br>
                    </form>

                    <input value={this.state.dueDate} onChange={this.Data} type="date" />
                    <br></br>
                    <button onClick={() => this.Cadastro()}> Cadastrar Produto </button>
                    <button onClick={() => console.log(this.state)}>clique </button>
                    
                </ContainerForm>
            </>


        );
    }
}

