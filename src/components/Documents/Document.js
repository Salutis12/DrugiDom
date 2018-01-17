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
import { Col, Image, Grid, Row, Panel, FormControl, FormGroup, InputGroup, Button, Glyphicon } from 'react-bootstrap';

class Document extends Component{
    constructor(props) {
        super(props);
    }
    status = () => {
        if (this.props.case_status === "1") {
            return "Akceptacja"
        } else {
            return "Brak Decyzji"
        }

    }
    handleDelete = () =>{
        fetch(this.props.id, {
            method: 'delete',
            headers:{
                'Authorization' : 'Basic',
            },
        }).then(() =>{
            this.props.onSubmit();
        });
    }
    handleEdit = (event) =>{
        fetch(this.props.id, {
            method: 'put',
            headers:{
                'Authorization' : 'Basic',
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({
                name: this.props.name,
                case_status: event.target.value,
                content: this.props.content
            })
        }).then(() =>{
            this.props.onSubmit();
        });
    };
    render(){
        return (
            <Row className="document">
                <Col sm={0} md={1} lg={2}>
                </Col>
                <Col sm={0} md={8} lg={8}>
                    <Panel>
                        <h2>{this.props.name}</h2>
                        <h3>{this.props.content}</h3>
                        <h4>{this.status()}</h4>
                        <form>
                            <Button  onClick={this.handleDelete} className="document-edit">
                                <Glyphicon glyph="pencil" />
                                Usuń</Button>
                            <select class="form-control" name="color" onChange={this.handleEdit}>
                                <option value="" disabled selected>Zmień Status</option>
                                <option value="1">Akceptacja</option>
                                <option value="0">Brak Decyzji</option>

                            </select>
                        </form>
                    </Panel>
                </Col>
                <Col sm={0} md={1} lg={2}>
                </Col>
            </Row>
        )
    }
}
export default Document;
/*                                <option value="2">Potrzebne dodadtkowe dokumenty</option>
 <option value="3">Brak Zgody</option>
 <option value="4">Weryfikacja</option>*/