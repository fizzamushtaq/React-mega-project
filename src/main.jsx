import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createStore, compose, applyMiddleware } from 'redux'

// const enchancers = compose
// const store = createStore (
//   rootReducer,
//   enchancers(applyMiddleware(thunk))
// );

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
