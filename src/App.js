import React, {Component} from 'react';
import logo from './logo.svg';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import './App.css';
import Main from "./components/Main";
import Advise from "./components/Advise";
import Footer from "./components/Footer";
import Login from "./components/Login/Login";
import Registration from "./components/Login/Registration";
import users from "./data/Users";
import Documents from "./components/Documents/Documents";
import Add from "./components/Documents/Add"
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users,
            user: '',
            isLogged: false,
        };
    }
    handleNavigation = (event) =>{
        this.navigation.checked = false;
        if (event.target.id === 'logout'){
            this.setState({isLogged: false})
        }
    }
    handleLogin = () =>{
        this.setState({isLogged: true})
    }
    handleNewUser = (values) =>{
        console.log(values)
        var array = this.state.users;
        array.push(values);
        this.setState({
            users: array,
        })
    }
    render() {
        let logout, logIn, registration, documents = null;
        if (this.state.isLogged){
            logout = <NavLink id="logout" onClick={this.handleNavigation} to="/">Wyloguj</NavLink>
            logIn = '';
            registration = '';
            documents =  <NavLink onClick={this.handleNavigation} to="/documents">Dokumenty</NavLink>;
        } else {
            logout = '';
            logIn = <NavLink onClick={this.handleNavigation} to="/logowanie">Zaloguj się</NavLink>;
            registration = <NavLink onClick={this.handleNavigation} to="/rejestracja">Rejestracja</NavLink>;
            documents = '';
        }
        return (
            <div>
                <HashRouter>
                    <div>
                        <input type="checkbox" id="navigation" ref={(input) => {this.navigation = input}}/>
                        <label for="navigation" className="burger" ><span></span></label>
                        <div className="navigation-wrapper">
                            <Navbar className="float-left">
                                <Navbar.Header>
                                    <Navbar.Brand>

                                    </Navbar.Brand>
                                    <Navbar.Toggle />
                                </Navbar.Header>
                                <Navbar.Collapse>
                                    <Nav>
                                        <NavItem className="before-column active" to="/"><NavLink to="/">Drugi
                                            Dom</NavLink></NavItem>
                                        <NavItem className="before-column" eventKey={1} href="#"><NavLink to="">O Nas</NavLink></NavItem>
                                        <NavItem className="before-column" eventKey={2} href="#">Kontakt</NavItem>

                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                        <nav className="nav-slide" id="">
                            <ul>
                                <li>
                                    {logIn}
                                    {registration}
                                    {documents}
                                    {logout}
                                </li>
                            </ul>
                        </nav>
                        <div className="content">
                            <Route exact path="/" component={Main}/>
                            <Route path="/czas" component={Advise}/>
                            <Route path='/logowanie'
                                   render={(props) => (
                                       <Login {...props} users={this.state.users} isLogged={this.handleLogin}/>
                                   )} />
                            <Route path='/rejestracja'
                                   render={(props) => (
                                       <Registration {...props} users={this.state.users} onSubmit={this.handleNewUser}/>
                                   )} />
                            <Route path="/documents" component={Documents}/>
                        </div>
                        <Footer/>
                    </div>
                </HashRouter>
            </div>

        );
    }
}
export default App;
