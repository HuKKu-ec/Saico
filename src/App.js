import Home from "./Pages/Home";
import History from "./Pages/History";
import Calculator from "./Pages/Calculator";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { AuthContext, FirebaseContext } from './store/Context';
function App() {
  const { setUser } = useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    });
  })
  return (
    <div className="App">
    
      <Router>
      <Route exact path='/'>
      <Home/>
        </Route>
        <Route exact path='/home'>
        <Home/>
        </Route>
        <Route exact path='/history'>
        <History/>
        </Route>
        <Route exact path='/calculator'>
        <Calculator/>
        </Route>
        <Route exact path='/Login'>
        <Login/>
        </Route>
        
      </Router>

    </div>
  );
}

export default App;
