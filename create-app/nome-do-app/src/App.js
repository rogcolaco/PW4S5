import logo from './logo.svg';
//import './App.css';
import React from 'react'
import {BrowserRouter as Router, Link, Switch, Route, useParams} from 'react-router-dom'

class App extends React.Component{

  render(){
    return(
      <Router>

        <div className="App">
          <Link to="/">Home</Link> <br/>
          <Link to="/cursos">Cursos</Link> <br/>
          <Link to="/localizacao">Localização</Link>
        </div>

        <Switch>

          <Route exact path="/">
           <Inicial />
          </Route>

          <Route path="/cursos">
            <Cursos />
          </Route>

          <Route path="/localizacao">
            <Localizacao />  
          </Route>

          <Route path="/:nome" children={<Professor />}>
          </Route>
                
        </Switch>

      </Router>

    );
  }

}

function Professor(){
  let {nome} = useParams();
  return(
    <div>
      <p>Nome: {nome}</p>
    </div>
  )
}

function Inicial(){
  return(
    <div>
        <h2>---- Bem vindo ----</h2>
        <p>Informações sobre o Campus</p>
      </div>
  )
}

function Cursos(){
  return(
    <div>
        <h2>Informações sobre os cursos</h2>
      </div>
  )
}

function Localizacao(){
  return(
    <div>
        <h2>Como chegar</h2>
      </div>
  )
}

//CODIGO QUE VEM COM PADRÃO NA INSTALACAO DO REACT
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
