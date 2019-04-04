import React, { Component } from 'react';
import { Slider , Button } from 'antd';

class Cube extends Component {
    constructor(props){
        super(props);
        this.state = {
            x:0,
            y:0,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0
        }
    }

    componentDidMount(){
        document.getElementById("wrapper").addEventListener("keypress",this.rotate)
    }

    rotate = (e) => {
        e.preventDefault();
        console.log(e)
    }

    setX = (value) => {
        this.setState({
            x: value
        })
    }

    setY = (value) => {
        this.setState({
            y: value
        })
    }

    changeFrontLayer = () => {
        this.setState({
            rotateX: 90
        })
    }

    renderFaces = (color) => {
        let faces = [];
        for(let i=0;i<9;i++){
            faces.push(<div key={i+color} className={color}></div>)
        }
        return faces;
    }
    renderCube = () => {
        return(<div className="wrapper w1" id="wrapper">
        <div className="cube" style={{ transform:`rotateX(${this.state.x}deg) rotateY(${this.state.y}deg)`}}> 
            <div className="side  front flex" style={{ transform:`rotateX(${this.state.rotateX}deg) rotateY(${this.state.rotateY}deg) rotateZ(${this.state.rotateZ}deg) translate:(92px)`}}>
                {this.renderFaces("green")}
            </div>
            <div className="side   back flex">
                {this.renderFaces("yellow")}
            </div>
            <div className="side  right flex">
                {this.renderFaces("red")}
            </div>
            <div className="side   left flex">
                {this.renderFaces("orange")}
            </div>
            <div className="side    top flex">
                {this.renderFaces("white")}
            </div>
            <div className="side bottom flex">
                {this.renderFaces("blue")}
            </div>
        </div>
      </div>)
    }
    render() {
        return (<div>
            <div className="container">
                {this.renderCube()}
            </div>
            <div style={{ padding:"20px" }}>
                <Slider defaultValue={0} min={-360} max={360} onChange={this.setX}/>
                <Slider defaultValue={0} min={-360} max={360} onChange={this.setY}/>
                <Button onClick={this.changeFrontLayer}>Front Layer change</Button>
            </div>

        </div>

        );
    }
}

export default Cube;