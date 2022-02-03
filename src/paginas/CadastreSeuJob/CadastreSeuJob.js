import React from "react";
import styled from "styled-components";
import { Key } from "react";
import { BaseUrl } from "react";
import axios from "axios";

export default class CadastreSeuJob extends React.Component {



   

    Data = (event) => {
        this.setState({dueDate : event.target.value})
    }

   Titulo = (event) => {
        this.setState({title : event.target.value})
    }

   Descricao = (event) => {
        this.setState({description : event.target.value})
    }


   FormaPagamento = (event) => {
        this.setState({paymentMethods: event.target.value})
        console.log(this.state.paymentMethods)
    }

    Preco = (event) => {
        this.setState({price : event.target.value})
    }
  
    state = {

        title: "",
        description: "",
        price: 0,
        paymentMethods:[],
        dueDate: "",
    }

    Cadastro = () => {
         
        const url = "https://labeninjas.herokuapp.com/jobs"

        const body = {

        title : this.state.title,
        description : this.state.description,
        price : this.state.price,
        paymentMethods : this.state.paymentMethods,
        dueDate : this.state.dueDate,

        }

        axios.post(url, body, {headers: {
            Authorization:"c523c7b3-fa48-4fbe-be79-c362eadb2683"}})

        .then((resp)=>{
             alert(resp)
            console.log(resp.data)
        })

        .catch((error)=> {
            alert(`Não foi possivel fazer o cadastro, motivo: ${error}`)
        })

    }
    render() {

        return (


            <div>
        <>

            <h2> Cadastre seu Serviço! </h2>

                <input value={this.state.title} onChange={this.Titulo} placeholder="Titulo do produto" />
            <br></br>
                <input value={this.state.description} onChange={this.Descricao} placeholder="Descrição do produto" /> 
                <br></br>
                <input type="number" value={this.state.price} onChange={this.Preco} placeholder="Preço do produto" />
                <br></br>
            <form>

                <select onChange={this.FormaPagamento}>

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
            <button onClick={this.fazCadastro}> Cadastrar Produto </button>


        </>
      </div>
  
      );
    }
  }

