
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import Home from './pages/home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import Authlayout from "./components/Authlayout"
import AllPosts from './pages/Allpost'
import Addpost from "./pages/Addpost"
import Editpost from './pages/editpost'
import Post from "./pages/Post"
import LoginPage from './pages/Login'
import Signup from './pages/signup'


// const enchancers = compose
// const store = createStore (
//   rootReducer,
//   enchancers(applyMiddleware(thunk))
// );

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "/login",
        element: (
          <Authlayout authentication={false}>
            Hi this is login page
            {/* <Login /> */}
            <LoginPage />
          </Authlayout>
        )
      },
      {
        path: "/signup",
        element: (
          <Authlayout authentication={false}>
            this is signup page
            <Signup />
          </Authlayout>
        )
      },
      {
        path: "/All-post",
        element: (
          <Authlayout authentication>
            {" "}
            <AllPosts />
          </Authlayout>
        )
      },
      {
        path: "/add-post",
        element: (
          <Authlayout authentication>
            {" "}
            <Addpost />
          </Authlayout>
        )
      },
      {
        path: "/edit-post/: slug",
        element: (
          <Authlayout authentication>
            {" "}
            <Editpost />
          </Authlayout>
        )
      },
      {
        path: '/post/: slug',
        element: <Post />
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