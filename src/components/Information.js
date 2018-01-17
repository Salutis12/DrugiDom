/**
 * Created by Grzegorz on 19.12.2017.
 */
import React, { Component } from 'react';
import { Grid, Col, Row, Well, Glyphicon } from 'react-bootstrap';

class Information extends Component{
    render(){
        return (
            <div id="information">
                <h1>Dlaczego my?</h1>
                <Grid>
                    <Row className="show-grid">
                        <Col sm={0} md={1} lg={2}>
                        </Col>
                        <Col sm={6} md={5} lg={4}>
                            <Well>
                                <Glyphicon className="glyph-custom" glyph="user" />
                                <div className="animation-well-line"></div>
                                <p className="animation-well-number">2500</p>
                                <p className="animation-well-text">gotowych miejsc</p>
                            </Well>
                        </Col>
                        <Col sm={6} md={5} lg={4}>
                            <Well>
                                <Glyphicon className="glyph-custom" glyph="bed" />
                                <div className="animation-well-line"></div>
                                <p className="animation-well-number">50</p>
                                <p className="animation-well-text">wolnych miejsc</p>
                            </Well>
                        </Col>
                        <Col sm={0} md={1} lg={2}></Col>
                    </Row>
                    <Row className="show-grid">
                        <Col sm={0} md={1} lg={2}></Col>
                        <Col sm={6} md={5} lg={4}>
                            <Well>
                                <Glyphicon className="glyph-custom" glyph="globe" />
                                <div className="animation-well-line"></div>
                                <p className="animation-well-number">3</p>
                                <p className="animation-well-text">lokalizacje</p>
                            </Well>
                        </Col>
                        <Col sm={6} md={5} lg={4}>
                            <Well>
                                <Glyphicon className="glyph-custom" glyph="glass" />
                                <div className="animation-well-line"></div>
                                <p className="animation-well-number">2</p>
                                <p className="animation-well-text">kluby</p>
                            </Well>
                        </Col>
                        <Col sm={0} md={1} lg={2}></Col>
                    </Row>
                </Grid>
            </div>
        );
    }
};

export default Information;