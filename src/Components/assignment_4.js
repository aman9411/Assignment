import React, { Component } from 'react';
import { Input } from 'reactstrap';




function Component1({text}) {
    return(
        <div className="component m-5">
            <p>{text}</p>
        </div>
        );

}

function Component2({text}) {
    return(
        <div className="component m-5">
            <p>{text}</p>
        </div>
        );

}

function Component3({text}) {
    return(
        <div className="component m-5">
            <p>{text}</p>
        </div>
        );

}

function Component4({text}) {
    return(
        <div className="component m-5">
            <p>{text}</p>
        </div>
        );

}



class Assignment_4 extends Component {
    constructor(props) {
        super(props);
        this.state = {  
          text: ''
        }
    }
    

    handleInput = (e) => {
      this.setState({
        text: e.target.value
      })
    }
    render () {
        return (
            <div className="container">
                <p>Assignment no. : 4</p>
                <div className="col-12 col-md-7 d-flex">
                <Component1 text={this.state.text} />
                <Component2 text={this.state.text} />
                </div>
                <Input className="form-control mr-1" type="text" placeholder="Search" aria-label="Search" onChange={this.handleInput} />
                <div className="col-12 col-md-7 d-flex">
                <Component3 text={this.state.text} />
                <Component4 text={this.state.text} />
                </div>
            </div>
        )
    }
}

export default Assignment_4;