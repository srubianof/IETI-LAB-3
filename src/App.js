import React, {useState} from "react";
import './App.css';
import {Login, PrivateRoute, SideBar} from "./components";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Redirect} from "react-router";

function App() {
    const [userLogged, setUserLogged] = useState({
        user: '',
        password: ''
    });
    console.log(userLogged)
    return (
        <>
            <Router>
                {/*<Redirect from='/' to='/login'/>*/}
                <Switch>
                    <Route exaxt path="/login"
                           component={() => <Login setUserLogged={setUserLogged}/>}/>
                    <Route path="/task-planner" component={SideBar}/>
                </Switch>

            </Router>
        </>
    );
}

export default App;
