import { useState, useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/Auth";
import { login, logout } from "./store/authSlice";
import { Footer } from "./components";
import Header from "./components/Header/header";
import { Outlet } from 'react-router-dom'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  // console.log("App write url is ", import.meta.env.VITE_APP_APPWRITE_URL);
  // console.log("App write project is ", import.meta.env.VITE_APP_APPWRITE_PROJECT_ID);
  // console.log("App write database is ", import.meta.env.VITE_APP_APPWRITE_DATABASE_ID);
  // console.log("App write collection is ", import.meta.env.VITE_APP_APPWRITE_COLLECTION_ID);
  // console.log("App write bucket is ", import.meta.env.VITE_APP_APPWRITE_BUCKET_ID);


  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          Welcome to our site  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App;



