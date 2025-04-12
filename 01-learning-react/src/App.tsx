import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";



function App() {

  /**SetContador cada vez que se hace click carga de nuevo el componente(render), 
   * con el nuevo valor lo actuliza (nuevo estado y lo muestra)  */
  const [count, setCount] = useState(0);
  
  const countMore = () => {
    setCount((count) => count + 1)
  }
  return (
    <>
    <Button label={`Count is ${count}`} parentMethod={countMore}/>
    </>
  );
}

export default App;
