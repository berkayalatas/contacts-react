import React from "react";
import { Card, Button, ListGroup, Accordion } from "react-bootstrap";

function ContactCard(props) {
  return (
    <>
      {props.cards.map((card, index) => {
        return (
          <Accordion>
            <Card className="mt-4 bg-light">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Contact {index + 1} - {card.name}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <div>
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item action variant="info">
                        <strong>ID:</strong> {index}
                      </ListGroup.Item>
                      <ListGroup.Item action variant="info">
                        <strong>Email:</strong>
                        {card.email}
                      </ListGroup.Item>
                      <ListGroup.Item action variant="info">
                        <strong>Name:</strong> {card.name}
                      </ListGroup.Item>
                      <ListGroup.Item action variant="info">
                        <strong>Surname:</strong>
                        {card.surname}
                      </ListGroup.Item>
                      <ListGroup.Item action variant="info">
                        <strong>Notes</strong> {card.note}
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                  <Card.Footer className="text-center">
                    <Button
                      className="btn btn-danger"
                      onClick={() => {
                        props.deleteCard(index);
                      }}
                    >
                      Delete
                    </Button>
 
                  </Card.Footer>
                </div>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        );
      })}
    </>
  );
}

export default ContactCard;
