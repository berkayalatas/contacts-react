import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button, FormControl } from "react-bootstrap";
import ContactCard from "./Components/ContactCard";

function App() {

  const [cards, setCards] = useState([]);

  const contactEmail = useRef();
  const contactName = useRef();
  const contactSurname = useRef();
  const contactNotes = useRef();

 
  function handleSubmit(event) {
    event.preventDefault();
    const email =contactEmail.current.value
    const name =contactName.current.value
    const surname =contactSurname.current.value
    const note = contactNotes.current.value

    const obj = 
    {email: email, name: name, 
    surname: surname, note: note}
    
    if(obj.email && obj.name && obj.surname && obj.note){
      setCards([...cards, obj])
    }
    
    contactEmail.current.value= ""
    contactName.current.value= ""
    contactSurname.current.value= ""
    contactNotes.current.value= ""

    contactEmail.current.focus();
  }

  function deleteCard(id) {
    cards.splice(id,1)
    setCards([...cards])
  }

 


  return (
    <Container className="mt-5">
      <h1 className="text-center text-muted"> CONTACTS</h1>
      <Row>
        <Col sm={12} className="p-5 mb-5 bg-secondary text-dark">
         <Form onSubmit={handleSubmit}>
          <Form.Group controlId="Title">
            <Form.Label className="my-3"> 
            <strong>E-mail:</strong> 
           </Form.Label>
            <Form.Control ref={contactEmail}
              placeholder="E-mail"
              type="email"
              name="email"
            />
            <Form.Label className="my-3">
              <strong>Name:</strong> 
            </Form.Label>
            <FormControl ref={contactName}
              placeholder="Name"
              type="text"
              name="name"
            />
            <Form.Label className="my-3">
              <strong>Surname:</strong>
            </Form.Label>
            <FormControl ref={contactSurname} 
            placeholder="Surname"
            type="text" 
            name="surname"
            />
            <Form.Label className="my-3"><strong>Notes:</strong> </Form.Label>
            <Form.Control
                as="textarea"
                ref={contactNotes}
                placeholder="Notes"
                rows={3}
                name="notes"
            />
          </Form.Group>
            <div className="text-center">
              <Button className="btn btn-success p-3" 
              onClick={handleSubmit}>ADD CONTACT</Button>
            </div>
         </Form>  
        </Col>
      </Row>
      <Row>
        <Col>
          <ContactCard  deleteCard={deleteCard}  
           cards={cards}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
