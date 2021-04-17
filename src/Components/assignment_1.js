import React, { Component } from 'react';
import {  Button, Input } from 'reactstrap';
import { Link } from 'react-router-dom';



class Assignment_1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  
          number: '',
          show: false
        }
    }
    

    handleInput = (e) => {
      this.setState({
        number: e.target.value
      })
    }
    render () {
        return (
            <div className="container">
                <p>Assignment no. : 1</p>
                <p>The missing number: 82</p>
                <p>Enter a number: </p>
                <div className="row">
                    <div className="col-12 col-md d-flex" >
                    <Input className="form-control mr-1" type="text" placeholder="Search" aria-label="Search" onChange={this.handleInput} />
                    <Button outline type="submit" value="submit" className="mr-1" onClick={()=>{this.setState({show:!this.state.show})}} >
                            <span>Show</span>
                    </Button>
                    </div>
                </div>
                {
                        this.state.show? <div className="m-5">{this.state.number}</div> : null
                }
                <h5 className="m-5 assignment" ><Link to={`./assignment_2`} >Assignment-2</Link></h5>
            </div>
        )
    }
}

export default Assignment_1;