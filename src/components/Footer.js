/**
 * Created by Grzegorz on 07.01.2018.
 */
/**
 * Created by Grzegorz on 20.12.2017.
 */
import React, { Component } from 'react';
import { Col, Grid, Row,Well, Glyphicon, FormGroup, FormControl , InputGroup, Button } from 'react-bootstrap';

class Footer extends Component{
    render(){
        return (
            <footer className="footer">
                <Grid>
                    <Row className="show-grid">
                        <Col sm={4} md={5} lg={2}></Col>
                        <Col sm={8} md={6} lg={8}><h1>Drugi Dom</h1></Col>
                    </Row>
                    <Row className="show-grid">
                        <Col sm={4} md={4} lg={2}></Col>
                        <Col sm={12} md={12} lg={6} className="column-newsletter">
                            <Well className="newsletter">
                                <h4> <Glyphicon className="glyph-footer" glyph="envelope" /> Newsletter</h4>
                                <h5>Zapisz się by otrzymywać najnowsze wiadomości</h5>
                               <form>
                                   <FormGroup>
                                       <InputGroup>
                                           <FormControl type="text" placeholder="Adres Email" />
                                           <InputGroup.Button>
                                               <Button>Wyślij</Button>
                                           </InputGroup.Button>
                                       </InputGroup>
                                   </FormGroup>
                               </form>
                            </Well>
                        </Col>
                        <Col sm={6} md={5} lg={2}>
                            <ul className="social-icons">
                                <li><a href="" className="social-icon"> <i className="fa fa-facebook-square"></i><span>Facebook</span></a></li>
                                <li><a href="" className="social-icon"> <i className="fa fa-twitter"></i><span>Twitter</span></a></li>
                                <li><a href="" className="social-icon"> <i className="fa fa-rss"></i><span>RSS</span></a></li>
                                <li><a href="" className="social-icon"> <i className="fa fa-youtube"></i><span>YouTube</span></a></li>
                                <li><a href="" className="social-icon"> <i className="fa fa-linkedin"></i><span>LinkedIn</span></a></li>
                                <li><a href="" className="social-icon"> <i className="fa fa-google-plus"></i><span>Google+</span></a></li>
                            </ul>
                        </Col>
                        <Col sm={0} md={1} lg={2}></Col>
                    </Row>
                    <Row className="footer-bottom">
                        <Col sm={4} md={3} lg={2}></Col>
                        <Col sm={12} md={6} lg={4}>
                            <p className="footer-p">©Copyright Grzegorz Kustroń 2017 - 2018</p>
                        </Col>
                    </Row>
                </Grid>
            </footer>
        )
    }
}
export default Footer;