import React,{useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { auth } from "./firebase";
import Home from "./Home"
import Header from "./Header"
import Login from "./Login"
import { useStateValue } from "./StateProvider";


useEffect(() => {
  // will only run once when the app component loads...

  auth.onAuthStateChanged((authUser) => {
    console.log("THE USER IS >>> ", authUser);

    if (authUser) {
      // the user just logged in / the user was logged in

      dispatch({
        type: "SET_USER",
        user: authUser,
      });
    } else {
      // the user is logged out
      dispatch({
        type: "SET_USER",
        user: null,
      });
    }
  });
}, []);


function App() {

  const [{}, dispatch] = useStateValue();
  
  return (
    <div className="app">
      <Router>
        <Switch>
        <Route path="/Login">
  <Login />
</Route>
          <Route path="/">
            <Header/>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
