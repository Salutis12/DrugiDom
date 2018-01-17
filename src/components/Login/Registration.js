/**
 * Created by Grzegorz on 09.01.2018.
 */
/**
 * Created by Grzegorz on 09.01.2018.
 */
/**
 * Created by Grzegorz on 20.12.2017.
 */
import React, { Component } from 'react';
import {
    NavLink,
    Redirect
} from "react-router-dom";
import { Col, Image, Grid, Row, ControlLabel, FormControl, FormGroup, InputGroup, Button } from 'react-bootstrap';

class Registration extends Component{
    constructor(props){
        super(props)
        this.state ={
            user: '',
            password: '',
            passwordRepeat: '',
            mistake: false,
            isLogged: false
        }
    }
    handleRegistration = (event) => {
        for (var i = 0; i < this.props.users.length; i++){
            if (this.props.users[i].login != this.state.user && this.props.users[i].pass != this.state.password && this.state.password === this.state.passwordRepeat) {
                this.props.onSubmit({
                    id: this.props.users.length + 1,
                    login: this.state.user,
                    pass: this.state.password
                });
                this.setState({isLogged: true});
                return this.setState({mistake: false});
            }}
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
            mistake = <Redirect from="*" to="/logowanie" />
        } else {
            mistake = '';
        }
        return (
            <div className="login wrapper">
                <Grid>
                    <Row>
                        <Col sm={0} md={1} lg={2}>
                        </Col>
                        <Col sm={0} md={1} lg={4}>
                            <h1>Rejestracja</h1>
                        </Col>
                        <Col sm={0} md={1} lg={2}>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={0} md={1} lg={2}>
                        </Col>
                        <Col sm={0} md={8} lg={4}>
                            <form>
                                <FormGroup  controlId="registrationEmail">
                                    <ControlLabel>Email:</ControlLabel>
                                    <FormControl name='user' onChange={this.handleChange} type="text" placeholder="Email" />
                                </FormGroup>
                                <FormGroup controlId="registrationPass">
                                    <ControlLabel>Hasło:</ControlLabel>
                                    <FormControl name='password' onChange={this.handleChange} type="password" placeholder="Hasło" />
                                </FormGroup>
                                <FormGroup  controlId="registrationPassRepeat">
                                    <ControlLabel>Powtórz Hasło:</ControlLabel>
                                    <FormControl name='passwordRepeat' onChange={this.handleChange} type="password" placeholder="Powtórz Hasło" />
                                </FormGroup>
                                    <Button bsSize="large" onClick={this.handleRegistration}>Rejestracja</Button>
                                    <NavLink to="/logowanie">Logowanie</NavLink>
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
export default Registration;