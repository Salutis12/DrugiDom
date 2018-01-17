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
    Link,
    Route,
} from "react-router-dom";
import { Col, Image, Grid, Row, Panel, FormControl, FormGroup, InputGroup, Button } from 'react-bootstrap';
import Document from "./Document";
import Add from "./Add"
class Documents extends Component{
    constructor(props){
        super(props);
        this.state = {
            documents: [],
            bool: ''
        }
    }
    componentDidMount() {
        this.handleGet();
    }

    handleGet = () =>{
        fetch('/api/documents')
            .then(response => {
                return response.json();
            })
            .then((documents) => {
                this.setState({ documents });
            })
            .then(() =>{
                this.setState({bool: 'Good'});
            })
    }

    render(){
        return (
            <div className="documents wrapper">
                <Grid>
                    <Route path='/documents/add'
                           render={(props) => (
                               <Add {...props} onSubmit={this.handleGet}/>
                           )} />
                    <Row>
                        <Col sm={0} md={1} lg={2}>
                        </Col>
                        <Col sm={0} md={1} lg={8}>
                            <h1>Dokumenty</h1>
                        </Col>
                        <Col sm={0} md={1} lg={2}>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={0} md={1} lg={2}>
                        </Col>
                        <Col sm={0} md={1} lg={8}>
                            <form>
                                <Link bsSize="large" className="document-add btn" to="/documents/add">Dodaj +</Link>
                            </form>
                        </Col>
                        <Col sm={0} md={1} lg={2}>
                        </Col>
                    </Row>
                    {this.state.documents.map((document) =>{
                        return <Document onSubmit={this.handleGet} id={document.url} name={document.name} content={document.content} case_status={document.case_status}/>
                    })}

                </Grid>
            </div>
        )
    }
}
export default Documents;
