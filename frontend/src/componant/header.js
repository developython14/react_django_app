
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState,Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form,Row,Col,FormGroup ,Input,Label } from 'reactstrap';

function Example(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Signup Form</ModalHeader>
        <ModalBody>
        <Form>
            <Row>
                <Col md={6}>
                <FormGroup>
                    <Input
                    id="nom"
                    name="nom"
                    placeholder="with a nom"
                    type="text"
                    />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
        
                    <Input
                    id="prenom"
                    name="prenom"
                    placeholder="prenom placeholder"
                    type="text"
                    />
                </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                <FormGroup>
                    <Input
                    id="pays"
                    name="pays"
                    placeholder="with a pays"
                    type="text"
                    />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Input
                    id="fonction"
                    name="fonction"
                    placeholder="fonction"
                    type="text"
                    />
                </FormGroup>
                </Col>
            </Row>
            <Row>
            <FormGroup>
                    <Input
                    id="instistue"
                    name="instistue"
                    placeholder="Entreprise, Université, Laboratoire"
                    type="text"
                    />
                </FormGroup>
            </Row>
        </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export {Example};

