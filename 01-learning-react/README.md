
# USESTATE
- useState: Usa el estado : Relacionar una variable para
que luego se pueda utilizar en render ; posee un metodo para modificar dicha varible y que esto haga un trigger un cambio de estado
- Se usa par agregar un estado a un componente funcional , el estado es un valor que React recuerda entre renders y puede cambiar con el tiempo 
- Estado: lougar donde se guardan las varibles , metodos

    - import { useState } from "react"; // 1️⃣ Importamos el hook useState
    export default function Contador() {
    const [contador, setContador] = useState(0); 
    // 2️⃣ Declaramos una variable de estado 'contador' con valor inicial 0
    //    y una función 'setContador' para modificar el estado
    return (
        <div>
        <h2>Contador: {contador}</h2> 
        {/* 3️⃣ Mostramos el valor actual de 'contador' en la pantalla */}
        <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        {/* 4️⃣ Al hacer clic en el botón, llamamos a 'setContador' para aumentar el contador en 1 */}
        {/* Esto hace que React vuelva a renderizar el componente con el nuevo estado: Lo que hace SetContador cada vez que se hace click carga de nuevo el componente(render), con el nuevo valor lo actuliza (nuevo estado y lo muestra) */}
        </div>
    );}
    - // Definimos una clase llamada "useState"
    class useState {
    // Propiedad para almacenar el valor del estado (puede ser cualquier tipo de dato)
    value: any;
    // Método para obtener el valor actual del estado
    get() {
        return this.value; // Devuelve el valor almacenado en la propiedad "value"
    }
    // Método para actualizar el valor del estado
    set(value: any) {
        this.value = value; // Asigna el nuevo valor a la propiedad "value"
    }
    }
    - const estado = new useState(); // Creamos una instancia de la clase
    estado.set(10); // Asignamos un valor de 10
    console.log(estado.get()); // Devuelve: 10
    estado.set(20); // Cambiamos el valor a 20
    console.log(estado.get()); // Devuelve: 20


