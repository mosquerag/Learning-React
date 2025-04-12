# React + TypeScript + Vite

# JAVASCRIPT ( Base de todo )

# Primero ir a la libría antes que al famework

# REACT ES UNA LIBRERÍA 
- Librería solamente tiene código de terceros que aumenta la funcionalidad de algo 

# Cuando usar React versu un framework
- Entre más javaScript sepa más va a saber React -> React es una (librería de JavaScript)
- Número 1 en el mercado Laboral despues le sigue Angular -> Vue 

# Creadores de React -> Faceboock / Meta 
- React : CSR -> Renderizado del aldo del cliente -> SPA -> Aplicaicón de pagina unicas 
- Librería para generar aplicaicones basados en componentes 

# React trabaja -> MVVM / MVC  (Modelo vista , vista modelo con Modelo vista Controlador ) , no es solo el modelo que modifica los datos 

# React 
Componentes =>
- HTML -> tien ela capacidad de modificar el modelo 
- Css 
- Typescript / JavaScript 
 
- Controller -> Typescript -> modelo -> vista -> modelo (el modelo se puede actulizar desde la misma vista)

# Cuando entonces es conveniente utilizar react 
- Cuando utilizamos App a medida (se puede ir todo seleccionando todo de apoco)
- Simplicidad ( minimiza el peso , porque solo pongo lo que yo realmente quiero)
- Sirve mucho para app que necesiten prototipado (prototypes)
- SPA (Single Page Application) : app web que carga una sola pagina Html y actualiza dinámicamente  -> CSR (Renderizado en el lado del cliente) -> Todo es en la aprte del cliente , todo dinamico  : todo lo que tenga que ver con aplicaciones privadas 

# Exiten FRAMEWORKS DE REACT 
PARA PERSONAS QUE YA SABEN REACT 
- SolidJs Reactividad Real (signals) - Es como debería haber sido React desde un principio (construir interfaces de usuario reactivas, similar a React, pero con un enfoque en la eficiencia y la reactividad sin el uso de un Virtual DOM) : No hay Trabajo en SolidJs  (primero aprender react antes de aprender SolidJs) n

- NexJs (SEO) - Genial para personas que ya seban - app que es privada y publica (ejem: ecommer , son privadas pero tiene acceso al publico) , necesito todo loq ue me brisda ?, tiene su forma de pensar diferente (tiene sus propias cosas) - CSR - SSR / SSG

- Reamix SSR ->  Que esta oensado para SSR : te brinda muchas cosas para hacer una separación de los componentes (renderizar app del lado del servidor ) , cuando utilizar Remix -> SEO , Preformance , Data fectching , Routing , Comodidad : No hay trabajo en Remix
 
# ES es igual que JAVASCRIPT 
- No es lo mismo , JavaScript es el lunguje y el Es es el conjunto de reglas que se utilizan para aprender la mayor capacidad de compatibilidad en los brouses 


# Render :
- Renderizar (o hacer un render) , significa actulizar la interfaz de usuario en la pantalla


# /*********************************************************************************************************************************************************************************************************************** */


# Meta Data -> Informacion estra de nuestra app (poder pasar más informacion a nuestra app )

# Build (Bundling) 
- Minificar el código (lo hace lo más chiquito posible)
- Va aglifai que es hacer feo (va hacer que el codigo va estar todo feo en un sola linea)
- Tree shaking (eliminda código muerto), archivo que no hacen nada

# Plugins 
Me permite meter cosas de manera rapida 
permite extender la funcionalidad de una aplicación sin modificar su código base
Extensibilidad → Permite agregar nuevas funciones sin modificar el código original.
Modularidad → Se pueden activar o desactivar características según sea necesario.
Reutilización → Se pueden compartir plugins en diferentes proyectos.

# Porque en  mi app aparece el StrincMode
- Un Modo : Controla la manera en que funciona los componentes, va ver qu etodo funcione correctamente -> Crea un componente  , lo va montar ( renderizar ), lo va destruir y lo va a volver a cargar , y va a ver si el estado del componente que se acaba de duplicar que se acaba de vovler hacer es igual a antes de que se haya destruido 
- El componentes se crea -> se llama la api -> se destruye -> se crea otra vez -> se vuelve a llamar la api = en producion se quita 

# CreateRoot 
- Metodo que vine de React Dom ( va estar trabajando con los elementos del DOM ) , crear el root la base de nuestra App

# Single Page Application (SPA) 
- Una SPA (Aplicación de Página Única) es una aplicación web que:
- Tiene solo un archivo HTML principal, comúnmente llamado index.html.
- Dentro de ese HTML hay un <div> principal, por ejemplo <div id="root"></div>, donde React carga y muestra todo el contenido dinámicamente.
- No recarga toda la página cuando el usuario navega por diferentes secciones. En su lugar, React actualiza solo las partes necesarias del DOM, lo que hace que la aplicación sea más rápida y fluida.
- Carga sola una pagina y se actuliza dinamicamente el conteneido sin necesidad de cragar la página completa (app que solo tiene un index.hmtl donde se carga todo lo que se hace con react ):
    - Solo hay un index.html que se carga una vez.
    - React maneja el contenido dentro del <div id="root">.
    - Cuando navegas por la app (por ejemplo con React Router), no se recarga la página, solo se actualiza la vista actual.
    - Esto mejora la experiencia del usuario porque es más rápido y fluido.

# DETECIÓN DE CAMBIO REACT
# TRIGGER (CUANDO HAY UN CAMBIO EN NUESTRA APP)
    - Trigger : Evento el cual va iniciar un proceso de Render(Renderizar) ejemplo , un botón , puede ser un trigger , 
    - Un estado
    - Un API 
    # Dos tipos de Trigger 
    - Trigger Inicial : El componente se monta , se renderiza  el contenido del componente 
    - Trigger Re-Render : (Algo que ya está montado y se renderiza de nuevo) Renderizo una vez -> hago un cambio -> renderizo otra vez (que puede hacer que algo se renderice , un botón, un llamado a un API ) 
    # Poreceso de Render en React : Render ; Ejecutar la función 
    # Componente 
    - Es una función que va hacer ejecutada , y su resultado se renderiza (Tratar que el número de render sea el minimo posible)

    # Dom - Dom Virtual 
    - Dom : Escribe y renderiza todo el contenido del html  de nuestra app 
    - Dom Virtual : Ver dentro donde hay un cambio y lo va a comparar y va a ver lo que cambio y hace la actualizacion , y despues se ejecuta la actualización 

    # Commit 
    - Proceso de aplicar cualquier cambio y renderizarlo al DOM REAL 

# Componentes : Un componente es una funcion 
- Un componente es una funcion que se va a ejecutar y su resultado se va a ejecutar dentro del Html 
- Siempre tiene que ser la minima unidad de logica posible , y tiene que contener , la logica que le pertece al componente
 
# Main.tsx (Crea la apliacion en el lugar que se le indiuque dentro del html)


# <App> 
- (Funcion llamada App , que lo que devuelve es un elemento JSX) Componente root , componente base de nuestra app , el componente que hace todo 

# JSX 
- Capacidad de tener en nuestro código Html , tambien tener logica dentro del html , logica de JavaScript ; si tiene una x quiere decir es que  (Retorna html con logica )

# import './index.css'
- Modulo de css , todo lo que esté en ese componente y sus hijos vana poder utilizarlo

# Atomizar 
- Dividir una App en componentes pequeños y reutilizables 

# Render :
- Renderizar (o hacer un render) , significa actulizar la interfaz de usuario en la pantalla

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


# USEEFFECT 
- useEffetc


# Hooks 

# Atomizar 
- Atomizar un componente con el minimo de logica posible y la cual le pertenece solo al componente
- Atomizar significa dividir la interfaz en componentes pequeños, reutilizables y específicos para mejorar la organización y el rendimiento del código

# Componente Inteligente : Maneja lógica y estado (contiene lógica y estado inter, controla como se comportan los otros componentes)

# Componente Tonto : Solo muestra UI(diseño) , (Solo muestra datos recibidos mediante props)

# Batching
- 