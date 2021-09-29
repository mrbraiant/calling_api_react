import React, { Component } from 'react';
import api from './api';

class App extends Component{

  state = {
    filmes: [],
  }

  async componentDidMount(){
    const response = await api.get('star%20wars') //filtro de pesquisa
    this.setState({ filmes: response.data});
  }

  render(){

    const {filmes} = this.state;

    return(
      //returning a table
      <div>
        {console.log(filmes)}
        <h1>Listar os Filmes</h1>
        {filmes.map(filme => (
          <table cellPadding={5} cellSpacing={5}>
            <thead key={filme.show.id}>
              <td><b>ID: </b></td>
              <td><b>Título: </b></td>
              <td><b>URL: </b></td>
            </thead>
            <tbody>
              <td>{filme.show.id}</td>
              <td>{filme.show.name}</td>
              <td>{filme.show.url}</td>
            </tbody>
          </table>
         
        ))}
      </div>

        //returning just some rows
/*       <div>
        {console.log(filmes)}
        <h1>Listar os Filmes</h1>
        {filmes.map(filme => (
          <li key={filme.show.id}>
            <h2><strong>Título: </strong>
              {filme.show.name}
            </h2>
            <p>
              {filme.show.url}
            </p>
          </li>
        ))}
      </div> */
      );
    }
  }

export default App;
