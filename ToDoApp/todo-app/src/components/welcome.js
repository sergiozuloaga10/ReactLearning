import { useState, useEffect } from "react";

function Welcome(props){
    let [ counter, setCounter ] = useState(0);
    const [ semaforo, setSemaforo ] = useState(false);
    const { message, name } = props;

    useEffect(() => {
        console.log(semaforo);
    }, [semaforo]);

    const contar = () => {
        setCounter(counter++);
        setSemaforo(!semaforo);
    }

    return (
        <div>
            <h1>Hola {name}</h1>
            <h2>Contador de React con Hooks</h2>
            <h4>El numero del contador es: {counter}</h4>
            <span>El semaforo esta en {semaforo ? "red" : "green"}</span>
            <button type="submit" className="btn-primary" onClick={contar}>Sumar Contador</button>
        </div> 
    );
}

export default Welcome;