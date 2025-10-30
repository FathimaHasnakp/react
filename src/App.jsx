// import './App.css'
// import RenderingList from './embedding-expression/RenderingList'
// import Condition from './embedding-expression/condition'
// import Calling_function from './embedding-expression/calling_function'
// import Welcome from './embedding-expression/welcome'


// function App() {

//   return (
//     <>
    {/* {/----------Embedding-expression----------} */}
    {/* <Welcome/> */}
    {/* <Calling_function/> */}
    {/* <Condition /> */}
    {/* <RenderingList/> */}

//     </>
//   )
// }

// export default App

// import Counter from './Class-components/Counter'
// import UsingProps from './Class-components/UsingProps'
// import Basic from './Class-components/Basic'
import { Component } from "react";
import Wrkcounter from "./Class-components/Wrkcounter";

export default class App extends Component {
  render() {
    return (
      <div>
    {/* <Basic/> */}
    {/* <UsingProps name="hasna"/> */}
    {/* <Counter/> */}
    <Wrkcounter/>


      </div>
    )
  }
}


