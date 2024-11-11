import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'
import Login from './components/login.jsx'
import Authlayout from "./components/Authlayout.jsx"


import signup from "./pages/signup.jsx"
import Allpost from "./pages/Allpost.jsx"
import Addpost from "./pages/Addpost.jsx"
import Editpost from './pages/editpost.jsx'
import Post from "./pages/Post.jsx"


// const enchancers = compose
// const store = createStore (
//   rootReducer,
//   enchancers(applyMiddleware(thunk))
// );

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: "/login",
        element: (
          <Authlayout authentication={false}>
            <Login/>
          </Authlayout>
        ) 
      },
      {
        path: "/signup",
        element: (
          <Authlayout authentication={false}>
            <signup/>
          </Authlayout>
        ) 
      },
      {
        path: "/All-post",
        element: (
          <Authlayout authentication>
            {" "}
            <Allpost/>
          </Authlayout>
        ) 
      },
      {
        path: "/add-post",
        element: (
          <Authlayout authentication>
            {" "}
            <Addpost/>
          </Authlayout>
        ) 
      },
      {
        path: "/edit-post/: slug",
        element: (
          <Authlayout authentication>
            {" "}
            <Editpost/>
          </Authlayout>
        ) 
      },
      {
        path: '/post/: slug',
        element: <Post/>
      },
    ],
  },
])
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
