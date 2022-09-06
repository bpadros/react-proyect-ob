// import logo from './logo.svg';
import './App.css';
// import OptionalRender from './components/pure/optionalRender';
// import GreetingStyled from './components/pure/greetingStyled';
// import Ejemplo4 from './hooks/Ejemplo4';
// import Ejemplo2 from './hooks/Ejemplo2';
// import MiComponenteConContexto from './hooks/Ejemplo3';
// import Ejemplo from './hooks/Ejemplo';
import TaskListComponent from './components/container/task_list';
import AsyncExample from './components/pure/AsyncExample';
import AxiosExample from './components/pure/AxiosExample';
import FetchExample from './components/pure/FetchExample';
import ObservableExample from './components/pure/ObservableExample';
// import LoginFormik from './components/pure/forms/loginFormik';
// import RegisterFormik from './components/pure/forms/registerFormik';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
// import Father from './components/container/father.jsx'


function App() {
return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/*componente proio greting.jsx */}
        {/* <Greeting name="Martin"></Greeting> */}
        {/* <GreetingF name="martin"></GreetingF> */}
       {/* <Ejemplo></Ejemplo> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
  {/*todo lo que hay aqui,es tratado como props.children */}
      {/* <Ejemplo4 nombre='Martin'>*/}
     {/* <h3>
        Contenido del props.children
      </h3>
       </Ejemplo4>  */}
       {/* <GreetingStyled name='Martin'></GreetingStyled> */}
      {/* </header> */}
      {/*gestion de eventos */}
     {/* <Father></Father> */}

     {/*Ejemplos de renderizado condicional */}
{/* <OptionalRender></OptionalRender> */}

{/*Ejemplos de usos de formik y yup */}
{/* <LoginFormik></LoginFormik> */}
{/* <RegisterFormik></RegisterFormik> */}

{/*Ejemplos de procesos asincroncos */}
{/* <AsyncExample></AsyncExample> */}
{/* <ObservableExample></ObservableExample> */}
{/* <FetchExample></FetchExample> */}
<AxiosExample></AxiosExample>

     {/*Proyecto final */}
     {/* <TaskListComponent></TaskListComponent> */}
    </div>
  );
}

export default App;
