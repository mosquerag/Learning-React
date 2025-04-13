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

# USUEFFECT ()
- Es un hook de React que se usa para ejecutar efectos secundarios en componentes 
¿Qué es un efecto secundario?
- Cualquier cosa que no sea directamente renderizar la interfaz, como por ejemplo:
- Llamar una API (endpoint externo)
- Escuchar eventos (como clicks globales, teclado, etc.)
- Usar temporizadores (setTimeout, setInterval)
- Conectarse a websockets
- Manipular el DOM directamente

 * Notas sobre el useEffect:
 * - Se ejecuta cuando se monta el componente (primer render).
 * - Se ejecuta cada vez que se modifica alguno de los valores incluidos en el arreglo de dependencias.
 * - Si no se incluye un arreglo de dependencias, se ejecuta cada vez que hay un cambio en cualquier parte del componente, lo cual puede ocasionar errores o comportamientos inesperados.

const [data, setData] = useState([]);
useEffect(() => {
  /** Esta lógica se ejecuta al montar el componente o cuando 'data' cambie. */

  return () => {
    /** Esta función se ejecuta cuando el componente se destruye.
     * Se usa para liberar memoria (manejar correctamente el estado).
     */
  };
}, [data]);

# Uso correcto del useEffect:
 * - Cuando necesitamos sincronizar con entidades externas (por ejemplo, APIs).
 * - Cuando hacemos operaciones asíncronas.
 * - Cuando recibimos parámetros de entrada externos al componente.

    - useEffect(() => {
    console.log("Me ejecuto UNA SOLA VEZ, cuando el componente se monta.");
    }, []);

    - useEffect(() => {
    console.log("Me ejecuto cada vez que el valor de 'estado' cambia.");
    }, [estado]);

    - useEffect(() => {
    console.log("Me ejecuto en cada render.");
    });
# Ejemplo:
const [data, setData] = useState([]);
const fetchData = async () => {
  const response = await fetch("https://api.example.com/data");
  const json = await response.json();
  setData(json);
};
useEffect(() => {
  fetchData(); // solo se ejecuta 1 vez al cargar el componente
}, []);

