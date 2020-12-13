import React, { Component } from 'react';



class Popup extends Component {
    state = {}
    render() {
        console.log(window.location.href);
        return (<div style={{ color: "black" }}><h1>Hello</h1></div>);
    }
}

export default Popup;