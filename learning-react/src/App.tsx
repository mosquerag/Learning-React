import { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./components/UseState/Button";
// import { ButtonUseEffect } from "./components/UseEffect/Button";

function App() {
  /**SetContador cada vez que se hace click carga de nuevo el componente(render),
   * con el nuevo valor lo actuliza (nuevo estado y lo muestra)  */

  /*USO DEL USESTATE */
  const [count, setCount] = useState(0);
  const countMore = () => {
    setCount((count) => count + 1);
  };

  /**USO DEL USEEFFECT */
  // Cuando se obtiene una data (debemos comunicarnos con un endpoint = entidad externa al componente)
  // Usamos useEffect para sincronizar con entidades externas.

  //1. Declaración del estado donde se almacenarán los datos traídos del endpoint.
  const [data, setData] = useState([]) 
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // 2. Definición del método que se encargará de obtener la información desde un endpoint externo 
  const fetchData = async () => { 
    setLoading(true)
    try {
      const response = await fetch ("https://jsonplaceholder.typicode.com")  // Llamada a la API.
      // const response = await fetch ("https://jsonplaceholder.typicode.com/posts")  // Llamada a la API.``
      if(!response.ok){
        throw new Error("Error al obtenenr datos")
      }
      const jsonData = await response.json() // Conversión de la respuesta a formato JSON.

      setData(jsonData)  // Almacenamos los datos en el estado.

    } catch(err){
      // setError(err as string)
      setError(err.message)

      console.log('error', err)
    }finally{
      setLoading(false)
    }
  }
  
  //3.  Llamada a nuestro método cuando el componente se monta (solo una vez).
  useEffect(() => {
    fetchData() //Ejecutamos la función para traer los datos.

    // 1. Se ejecuta cuando se monta el componente.
    // 2. Se ejecuta cada vez que se modifica alguno de los valores del estado (si se incluye en el arreglo de dependencias).

    return () => {}   // Esta función de limpieza (return) se ejecuta cuando el componente se desmonta.
  }, []); // useEffect: Método que acepta otro método y un arreglo de dependencias.

  if (loading){
    return <div>Cargando...</div>
  }
  if(error){
    return <div>UPS! Hay un error: {error} </div>
  }
  return (
    <>
      <Button label={`Use of UseState ${count}`} parentMethod={countMore} />
      <div>{JSON.stringify(data)}</div>
    </>
  );
}

export default App;


/** QUEDE EN EL MINUTO 2:56:19 */
