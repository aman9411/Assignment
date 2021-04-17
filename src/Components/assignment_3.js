import React, { Component} from 'react';
import { Button, Row, Col, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Control ,LocalForm ,Errors} from 'react-redux-form';
import { Link } from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            isModal2Open: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleModal2 = this.toggleModal2.bind(this);
        this.handleContact = this.handleContact.bind(this);
        this.handleContact1 = this.handleContact1.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    toggleModal2() {
        this.setState({
            isModal2Open: !this.state.isModal2Open
        });
    }

    handleContact(values) {
           this.toggleModal();
           alert("Current State is " + JSON.stringify(values));
    }


    handleContact1(values) {
        this.toggleModal2();
        alert("Current State is " + JSON.stringify(values));
    }

render() {
  return(
    <div>
        <Button outline onClick={this.toggleModal} >Add Contact</Button>
       <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}><span className="fa fa-user"></span> Add Contact</ModalHeader>
                    <ModalBody>
                          <LocalForm  onSubmit={(values) => {this.handleContact(values)} }>
                          <Row className="form-group">
                                     <Col md={12}>
                                     <Control.text model=".contact" id="contact" name="contact"
                                      placeholder="Mobile No."
                                     className="form-control"
                                     validators={{
                                      required, maxLength: maxLength(1)
                                  }} />
                                   <Errors 
                                 className="text-danger"
                                 model=".contact"
                                 show="touched"
                                 messages={{
                                     required: 'Required',
                                     maxLength: 'Must be 15 characters or less'
                                 }}
                                 />
                                     </Col>
                                 </Row>
                                
                               <Button className="m-1" type="submit" value="submit" color="primary" onClick={this.toggleModal2}>Add Contact</Button>
                              
                               <Button className="float-right" outline onClick={this.toggleModal2}>
                                    Submit
                                </Button>

                          </LocalForm>
                    </ModalBody>
                </Modal>

                <Modal isOpen={this.state.isModal2Open} toggle={this.toggleModal2}>
                    <ModalHeader toggle={this.toggleModal2}><span className="fa fa-user"></span> Add Another Contact </ModalHeader>
                    <ModalBody>
                          <LocalForm onSubmit={(values) => {this.handleContact1(values)} }>

                          <Row className="form-group">
                                     <Col md={12}>
                                     <Control.text model=".contact" id="contact" name="contact"
                                      placeholder="Mobile No."
                                     className="form-control"
                                     validators={{
                                      required, maxLength: maxLength(1)
                                  }} />
                                   <Errors 
                                 className="text-danger"
                                 model=".contact"
                                 show="touched"
                                 messages={{
                                     required: 'Required',
                                     maxLength: 'Must be 15 characters or less'
                                 }}
                                 />
                                     </Col>
                                 </Row>
                                                          
                               <Button className="float-right" outline onClick={this.toggleModal2}>
                                    Submit
                                </Button>

                          </LocalForm>
                    </ModalBody>
                </Modal>
    </div>
         
  );
}
}


class Assignment_3 extends Component {
    render () {
        return (
            <div className="container">
                <p>Assignment no. : 3</p>
                <Contact />
                <h5 className="m-5 assignment" ><Link to={`./assignment_4`} >Assignment-4</Link></h5>
            </div>
        )
    }
}

export default Assignment_3;