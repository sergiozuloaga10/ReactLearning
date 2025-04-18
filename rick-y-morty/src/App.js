import imagenRyM from "./img/rick-morty.png"
import './App.css';
import { useState } from "react";
import Character from "./components/Character";

function App() {
  const [characters, setCharacter] = useState(null);


  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characteApi = await api.json();

    setCharacter(characteApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? <Character characters={characters} setCharacter={setCharacter}/> : 
        <>
        <img src={imagenRyM} alt='Rick & Morty' className='img-home'></img>
        <button onClick={reqApi} className="btn-search">Buscar Personajes</button>
        </>
        }
        
      </header>
    </div>
  );
}

export default App;
