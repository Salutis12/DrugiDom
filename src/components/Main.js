/**
 * Created by Grzegorz on 18.12.2017.
 */
import React, { Component } from 'react';


import Slider from "./Slider";
import Information from "./Information";
import Advise from "./Advise";
import Facilities from "./Facilities";

class Navigation extends Component {
    render() {
        return (
            <div>
                <Slider/>
                <Information/>
                <Advise/>
                <Facilities/>
            </div>
        );
    }
}
export default Navigation;