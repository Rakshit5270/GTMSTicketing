import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
import Home from './src/pages/Home';

const Routes = () => (
    <Router>
        <Scene key = "root" hideNavBar={true}>
            <Scene key = "login" component = {Login} title = "Login" initial = {true} />
            <Scene key = "home" component = {Home} title = "Home" />
            <Scene key = "signup" component = {Signup} title = "Signup" />
       </Scene>
    </Router>
)
export default Routes
