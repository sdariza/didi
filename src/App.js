import logo from './logo.svg';
import './App.css';
import axios from 'axios';
function App() {
  console.log(axios);
  const httpsApi = 'https://api.elsevier.com/content/search/author?query=';
  async function getUser(){
    try{
      console.log(0);
      const response = await axios.get(`${httpsApi}authlast(Romero)%20and%20authfirst(Daniel)%20and%20affil(Universidad%20del%20Norte)%20and%20affilcity(Barranquilla)&apiKey=7f59af901d2d86f78a1fd60c1bf9426a`)
      console.log(response);      
    }catch(error){
      console.error(error);
    }
  }
  getUser();
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
}

export default App;
