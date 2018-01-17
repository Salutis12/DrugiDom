/**
 * Created by Grzegorz on 09.01.2018.
 */
/**
 * Created by Grzegorz on 20.12.2017.
 */
import React, { Component } from 'react';
import {
    Route,
    NavLink,
    Redirect
} from "react-router-dom";
import { Col, Image, Grid, Row, Panel, FormControl, FormGroup, InputGroup, Button } from 'react-bootstrap';

class Login extends Component{
    constructor(props){
        super(props)
        this.state ={
            user: '',
            password: '',
            mistake: false,
            isLogged: false
        }
    }
    handleLogin = (event) => {
        for (var i = 0; i < this.props.users.length; i++){
            if (this.props.users[i].login === this.state.user && this.props.users[i].pass === this.state.password ) {
                this.props.isLogged();
                this.setState({isLogged: true});
                return this.setState({mistake: false});
            }
        }
        return this.setState({mistake: true});
    }
    handleChange = (event) => {
        var end = event.target.name;
        this.setState({[end]: event.target.value});
    }
    render(){
        let mistake = null;
        if (this.state.mistake){
            mistake = <h2>Zły login lub hasło</h2>
        } else if(this.state.isLogged)  {
            mistake = <Redirect from="*" to="" />
        } else {
            mistake = '';
        }
        return (
            <div className="registration wrapper">
                <Grid>
                    <Row>
                        <Col sm={0} md={1} lg={2}>
                        </Col>
                        <Col sm={0} md={1} lg={8}>
                           <h1>Logowanie</h1>
                        </Col>
                        <Col sm={0} md={1} lg={2}>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={0} md={1} lg={2}>
                        </Col>
                        <Col sm={0} md={8} lg={4}>
                            <form>
                                <FormGroup>
                                    <FormControl name='user' onChange={this.handleChange} type="text" placeholder="Login \ Adres Email" />
                                    <FormControl name='password' onChange={this.handleChange} type="password" placeholder="Hasło" />
                                    <Button bsSize="large" onClick={this.handleLogin}>Zaloguj</Button>
                                    <NavLink to="/rejestracja">Rejestracja</NavLink>
                                </FormGroup>
                            </form>
                            {mistake}
                        </Col>
                        <Col sm={0} md={1} lg={6}>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
export default Login;