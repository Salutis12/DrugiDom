/**
 * Created by Grzegorz on 20.12.2017.
 */
/**
 * Created by Grzegorz on 20.12.2017.
 */
import React, { Component } from 'react';
import { Col, Grid, Row, Glyphicon } from 'react-bootstrap';
import person from '../assets/img/person.jpg'

class Facilities extends Component{
    render(){
        return (
            <div className="facilities">
                <Grid>
                    <Row>
                        <Col xs={12} lg={12}>
                            <p>Co oferują wszystkim studentom nasze akademiki?</p>
                        </Col>
                    </Row>
                    <Row className="facilities-color facilities-square">
                        <Col lg={4}>
                                <img src={person}>
                                </img>
                            <p>
                                THUG LIFE
                            </p>
                        </Col>
                        <Col lg={4}>
                            <img src={person}>
                            </img>
                            <p>
                                THUG LIFE
                            </p>
                        </Col>
                        <Col lg={4}>
                            <img src={person}>
                            </img>
                            <p>
                                THUG LIFE
                            </p>
                        </Col>

                    </Row>
                    <Row className="facilities-color-second facilities-square">
                        <Col lg={4}>
                            <img src={person}>
                            </img>
                        </Col>
                        <Col lg={4}>
                            <img src={person}>
                            </img>
                        </Col>
                        <Col lg={4}>
                            <img src={person}>
                            </img>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
export default Facilities;