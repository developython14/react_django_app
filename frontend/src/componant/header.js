
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState,Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form,Row,Col,FormGroup ,Input,Label } from 'reactstrap';
import { Card,CardText,CardTitle,CardBody,CardSubtitle } from 'reactstrap';

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
            <Row>
            <FormGroup>
                    <Input
                    id="site"
                    name="site"
                    placeholder="Site web de l'organisme"
                    type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                    id="domaine"
                    name="domaine"
                    placeholder="Domaine de recherche"
                    type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                    id="adresse_ins"
                    name="adresse_ins"
                    placeholder="Adresse de l'organisme"
                    type="text"
                    />
                </FormGroup>
            </Row>
            <Row>
                <Col md={6}>
                <FormGroup>
                    <Input
                    id="email_pro"
                    name="email_pro"
                    placeholder="Email professionnel"
                    type="text"
                    />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Input
                    id="portable professional"
                    name="portable professional"
                    placeholder="Portable professionnel"
                    type="text"
                    />
                </FormGroup>
                </Col>
            </Row>
            <Row>En envoyant ce formulaire vous acceptez les Conditions d'utilisation. <br></br>Vous allez recevoir un email de confirmation d'inscription à l'adresse indiquée.</Row>
        </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Envoyer
          </Button>{' '}
        </ModalFooter>
      </Modal>
      <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      Card title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Button>
      Button
    </Button>
  </CardBody>
</Card>
    </div>
  );
}

export {Example};

