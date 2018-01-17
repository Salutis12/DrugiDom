/**
 * Created by Grzegorz on 20.12.2017.
 */
import React, { Component } from 'react';
import { Col, Image, Grid, Row, Panel } from 'react-bootstrap';
import person from '../assets/img/person.jpg'

class Advise extends Component{
    render(){
        return (
            <div className="advise">
                <Grid>
                    <Row>
                        <Col sm={0} md={1} lg={1}>
                        </Col>
                        <Col sm={4} md={3} lg={4}>
                            <div className="relative">
                                <Image width="250" height="200" src={person} circle />
                                <span>Złota Owca</span>
                            </div>
                            <br/>
                            <p className="text-align-center">Kierownik Adademika</p>
                        </Col>
                        <Col sm={8} md={7} lg={6}>
                            <div className="advise-panel">
                                <Panel>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus mauris non consequat sagittis. Ut pharetra eros eu urna congue posuere. Pellentesque sed commodo quam. Nam pretium rutrum dapibus. Proin imperdiet, eros sed eleifend pretium, ante justo lacinia lorem, ut rhoncus tellus risus nec massa.</p>
                                </Panel>
                            </div>
                        </Col>
                        <Col sm={0} md={1} lg={1}>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
export default Advise;