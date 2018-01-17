/**
 * Created by Grzegorz on 09.01.2018.
 */
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
} from "react-router-dom";
import { Col, Image, Grid, Row, Panel, FormControl, FormGroup, InputGroup, Button } from 'react-bootstrap';

class Add extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            case_status: '0',
            content: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleChange(event) {
        var end = event.target.name;
        this.setState({[end]: event.target.value});
    }
    handleAdd = (event) =>{
        fetch('/api/documents/', {
            method: 'post',
            headers:{
                'Authorization' : 'Basic Z3J6ZWdvcno6bWFqMG5lejE=',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(this.state),

        }).then(function(response) {
            console.log(response)
            return response.json();
        }).then(() =>{
            this.props.onSubmit();
        });
    }
    render(){
        return (
            <div className="add wrapper">
                <Grid>
                    <Row>
                        <Col sm={0} md={1} lg={2}>
                        </Col>
                        <Col sm={0} md={1} lg={8}>
                            <h1>Dodaj Dokument</h1>
                        </Col>
                        <Col sm={0} md={1} lg={2}>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={0} md={1} lg={2}>
                        </Col>
                        <Col sm={0} md={1} lg={8}>
                            <form>
                                <FormGroup>
                                    <FormControl id="addDocuments0" name="name" type="text" onChange={this.handleChange} value={this.state.name} placeholder="Nazwa" />
                                    <select id="addDocuments1" name="case_status" class="form-control" onChange={this.handleChange} value={this.state.case_status} >
                                        <option value="" disabled selected>Zmień Status</option>
                                        <option value="1">Akceptacja</option>
                                        <option value="0">Brak Decyzji</option>

                                    </select>
                                </FormGroup>
                                <FormControl id="addDocuments2" name="content" onChange={this.handleChange} value={this.state.content} componentClass="textarea" placeholder="Zawartość" />
                            </form>
                        </Col>
                        <Col sm={0} md={1} lg={2}>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={0} md={1} lg={2}>
                        </Col>
                        <Col sm={0} md={1} lg={8}>
                            <form>
                                <NavLink bsSize="large" onClick={this.handleAdd} className="document-add btn" to="/documents">Dodaj +</NavLink>
                            </form>
                        </Col>
                        <Col sm={0} md={1} lg={2}>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
export default Add;
/* <option value="2">Potrzebne dodadtkowe dokumenty</option>
 <option value="3">Brak Zgody</option>
 <option value="4">Weryfikacja</option>*/