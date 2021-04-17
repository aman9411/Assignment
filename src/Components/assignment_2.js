import React, { Component } from 'react';
import {  Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';


const api = axios.create({
    baseURL: 'http://localhost:3001/about/'
})

class Assignment_2 extends Component {

    state = {
        about: []
    }

    constructor(props) {
        super(props);
        api.get('/').then( res => {
            console.log(res.data)
            this.setState({ about: res.data })
        })
        this.state = {  
          show: false,
          showPanel: false
        }
    }

    render () {
        return (
            <div className="container">
                <p>Assignment no. : 2</p>
                <div className="row">
                    <div className="col-12 col-md">
                    <Button outline type="submit" value="submit" className="mr-1" onClick={()=>{this.setState({show:!this.state.show})}} >
                            <span>Open Panel</span>
                    </Button>
                    </div>
                    {
                        this.state.show? <div className="col-12 col-md-10 m-5 panel">
                            <div>
                                <div className="d-flex">
                                    <Button outline type="submit" value="submit" className="mr-5" onClick={()=>{this.setState({show:!this.state.show})}} >
                                    <span>Edit</span>
                                    </Button>
                                    <Button outline type="submit" value="submit" className="mr-5" onClick={()=>{this.setState({show:!this.state.show})}} >
                                            <span>Save</span>
                                    </Button>
                                    <Button outline type="submit" value="submit" className="m-0" onClick={()=>{this.setState({showPanel:!this.state.showPanel})}} >
                                    <span>+</span>
                                    </Button>
                                </div>
                                {
                                        this.state.showPanel? <div className="m-5 panel">
                                            { this.state.about.map(text => <p>{text.description}</p>)}
                                            </div> : null
                                }
                            </div>
                        </div> : null
                    }
                </div>
                <h5 className="m-5 assignment" ><Link to={`./assignment_3`} >Assignment-3</Link></h5>
            </div>
        )
    }
}

export default Assignment_2;