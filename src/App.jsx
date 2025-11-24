// import { Link, Route, Routes } from 'react-router-dom'
// import { Route, Routes } from 'react-router-dom'
// import { Route, Routes } from 'react-router-dom'
import { Axios } from 'axios'
import './App.css'
import UseMemo from './Functional-components/hooks/UseMemo '
// import UseRef from './Functional-components/LifeCyleMethods/UseRef'
// import UseMemo from './Functional-components/LifeCyleMethods/UseMemo '
// import ProductPage from './desighn/dynamic-routing-rv-example/ProductPage'
// import { Route } from 'react-router-dom'
// import ProductDetails from './desighn/dynamic-routing-rv-example/ProductDetails'
// import AxiosDelete from './axios/AxiosDelete'
// import AxiosPut from './axios/AxiosPut'
// import AxiosPost from './axios/AxiosPost'
// import AxiosGet from './axios/AxiosGet'
// import Todo from './Todo/Todo'
// import Crud from './local-storage/crud'
// import ProfileCard from './ProfileCard/ProfileCard'
// import SimpleForm from './Form/SimpleForm'
// import Form from './Form/Form'
// import Product from './dynamic-routing/Product'
// import ProductDetailPage from './dynamic-routing/ProductDetailPage'
// import Home from './react-router-dom/Home'
// import About from './react-router-dom/About'
// import { UserApiContext, UserApiProvider } from './Functional-components/hooks/UseContext-hooks/Userlist/UserApiContext'
// import UserList from './Functional-components/hooks/UseContext-hooks/Userlist/UserList'
// import Home from './Functional-components/hooks/UseContext-hooks/dark&LightMode/Home'
// import { ThemeProvider } from './Functional-components/hooks/UseContext-hooks/dark&LightMode/ThemeContext'
// import OnMount from './Functional-components/LifeCyleMethods/UseEffect-Hooks/OnMount'
// import SpecificValue from './Functional-components/hooks/UseEffect-Hooks/SpecificValue'
// import ProfileForm from './Functional-components/hooks/UseState/ProfileForm'
// import NameForm from './Functional-components/hooks/UseState/NameForm'
// import RenderingList from './embedding-expression/RenderingList'
// import Condition from './embedding-expression/condition'
// import Calling_function from './embedding-expression/calling_function'
// import Welcome from './embedding-expression/welcome'

// import Navbar from "./nested-routing/Navbar"
// import Home from './nested-routing/pages/Home'
// import About from './nested-routing/pages/About'
// import Service from './nested-routing/pages/Service'
// import WebDev from './nested-routing/pages/services/WebDev'
// import AppDev from './nested-routing/pages/services/AppDev'
// import Design from './nested-routing/pages/services/Design '

// import ToggleButton from "./Functional-components/UseState/ToggleButton"


// import UserList from "./Functional-components/hooks/UseEffect-Hooks/UserList"

// import Timer from "./Functional-components/hooks/UseEffect-Hooks/Timer"


// import Props from "./Functional-components/Props"

// import State from "./Functional-components/State"

// import Basic from "./Functional-components/Basic"



function App() {

  return (
    <>
      {/* {/----------Embedding-expression----------} */}
      {/* <Welcome/> */}
      {/* <Calling_function/> */}
      {/* { <Condition /> } */}
      {/* <RenderingList/>   */}


      {/* {/*-------- functional components *---------------/} */}
      {/* <Basic/> */}
      {/* <State/> */}
      {/* <Props/> */}

      {/* hooks & life cycle methods */}
      {/* <Timer/> */}
      {/* <UserList/> */}
      {/* <UseRef/> */}
      <UseMemo/>
      {/* <ToggleButton/> */}
      {/* <NameForm/> */}
      {/* <ProfileForm/> */}
      {/* <OnMount/> */}
      {/* <SpecificValue/> */}


      {/* -------useContext hook------------ */}
      {/* { <ThemeProvider> */}
      {/* <Home/>
  </ThemeProvider>  
   } */}
      {/* <UserApiProvider>
    <UserList/>
   </UserApiProvider> */}


      {/* ----react-router-dom--------------- */}
      {/* 1,----basic routing----- */}
      {/* <div>
        <nav>
          <Link to='/'>Home</Link><br />
          <Link to='/about'>About</Link>
        </nav>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes> */}

      {/* ----------2,dynamic-routing---------- */}
      {/* <Routes>
        <Route path='/'element={<Product/>}/>
        <Route path='/products/:id' element={<ProductDetailPage/>}/>
      </Routes> */}

      {/* -------3,nested-routing------ */}
      {/* <Navbar/>
      <div className="container-app">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/> */}

          {/* nested routing starts here */}
          {/* <Route path='/service' element={<Service/>}>
          <Route path='web-development' element={<WebDev/>}/>
          <Route path='app-development' element={<AppDev/>}/>
          <Route path='design' element={<Design/>}/>
          </Route>
        </Routes>
      </div> */}

      {/* <ProfileCard/> */}

      {/* ------------forms------- */}
      {/* <SimpleForm/> */}
      {/* <Form/> */}

      {/* local-storage */}
      {/* <Crud/> */}


      {/* <Todo/> */}


{/* ---------------axios--------------- */}
{/* <AxiosGet/> */}
     {/* <AxiosPost/> */}
     {/* <AxiosPut/> */}
     {/* <AxiosDelete/> */}


     {/* ----------dynamic routing real world example------ */}
     {/* <ProductPage/> */}
     {/* <Route path='/'element={<ProductPage/>}/>
     <Route path='/product/:id' element={<ProductDetails/>}/>
     </Route> */}
    </>
  )
}

export default App


//------------ class components----------------------//

// import Counter from './Class-components/Counter'
// import UsingProps from './Class-components/UsingProps'
// import Basic from './Class-components/Basic'
// import { Component } from "react";
// import ButtonUnMount from "./Class-components/Life cycle methods/ButtonUnMount";
// import UnMounting from "./Class-components/Life cycle methods/UnMounting";
// import Updating from "./Class-components/Life cycle methods/Updating";
// import Mounting from "./Class-components/Life cycle methods/Mounting";
// import Wrkcounter from "./Class-components/Wrkcounter";

// export default class App extends Component {
//   render() {
//     return (
//       <div>
{/* <Basic/> */ }
{/* <UsingProps name="hasna"/> */ }
{/* <Counter/> */ }
{/* <Wrkcounter/> */ }
{/* <Mounting/> */ }
{/* <Updating/> */ }
{/* <UnMounting/> */ }
// <ButtonUnMount />

//       </div>
//     )
//   }
// }


