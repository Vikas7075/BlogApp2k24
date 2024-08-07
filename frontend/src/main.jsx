import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



export const server = "http://localhost:4000";

export const Context = createContext({ isAuthenticated: false, loading: false });

const AppWrapper = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  return (
    <Context.Provider value={{
      isAuthenticated, setIsAuthenticated, loading, setLoading, user, setUser
    }}>
      <App />
    </Context.Provider>
  );

};

ReactDOM.createRoot(document.getElementById('root')).render(

  <AppWrapper />

)
