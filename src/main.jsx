import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";

import RouteLayout from './Components/RouteLayout.jsx';
// import AboutPage from './Pages/AboutPage.jsx';
// import MyAccountPage from './Pages/MyAccountPage.jsx';
import SignUpPage from './Pages/SignUpPage.jsx';
import Shop from './Pages/Shop.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import store from './Components/store.js'
import { Provider } from 'react-redux'
import Contacts from './Pages/Contacts.jsx';
import About from './Pages/About.jsx';

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route>
      <Route path='/' element={<RouteLayout />}>
        <Route path='/' element={<App/>}/>
        <Route path='contacts' element={<Contacts/>}/>
        <Route path='about' element={<About/>}/>
        {/* <Route path='myaccount' element={<MyAccountPage/>}/> */}
        <Route path='sign-up' element={<SignUpPage/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='/:id' element={<ErrorPage />}/>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
