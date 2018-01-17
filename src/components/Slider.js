/**
 * Created by Grzegorz on 18.12.2017.
 */
import React, { Component , ref} from 'react';
import { Carousel } from 'react-bootstrap';
import aka1 from '../assets/video.mp4'

class Slider extends Component{

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            direction: null,
            test: false,
            height: window.innerHeight-52,
            width: window.innerWidth
        };
    }
    updateDimensions = (e) => {
        console.log(window.innerHeight);
        this.setState({
            height: window.innerHeight-52,
            width: window.innerWidth
        });
    }
    componentWillMount(){
        this.updateDimensions;
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }
    componentWillUnmount() {
        window.addEventListener("resize", this.updateDimensions);
    }
    handleSelect = (selectedIndex, e) => {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
    }

    render() {
        return (
            <Carousel style={{'height':this.state.height}} id="carousel" activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
                <Carousel.Item>
                    <video width={this.state.width} style={{'height':this.state.height}} className="img-carousel img-responsive" muted autoplay="autoplay" loop preload>
                        <source src={aka1} type="video/mp4"/>
                    </video>

                </Carousel.Item>
            </Carousel>

        );
    }
};

export default Slider;
/*<img width={this.state.width} style={{'height':this.state.height}} className="img-carousel img-responsive" src={aka1} />*/

