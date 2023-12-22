import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import Store from "./love/bRedux/Store";
import App2 from './app/App2.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <App2 />
    </Provider>
  </React.StrictMode>,
)
