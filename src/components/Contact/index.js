import './contact.scss';
import {
  Form,
  Button,
  Col,
  Row,
  Card,
} from 'react-bootstrap';

const Contact = () => (
  <div>
    <div className="contact-card">
      <Row>
        <Col xs={12} md={6} xl={3} className="d-flex justify-content-center">
          <Card className="contact-card">
            <Card.Img className="contact-img" variant="top" src="#" />
            <Card.Body>
              <Card.Title>Elise </Card.Title>
              <Card.Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Rem iure eos nihil veritatis nulla dolores ipsa beatae laudantium,
                sed error amet magnam saepe explicabo asperiores quas vitae nemo voluptate.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} xl={3} className="d-flex justify-content-center">
          <Card className="contact-card">
            <Card.Img className="contact-img" variant="top" src="#" />
            <Card.Body>
              <Card.Title>Jérémy </Card.Title>
              <Card.Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Rem iure eos nihil veritatis nulla dolores ipsa beatae laudantium,
                sed error amet magnam saepe explicabo asperiores quas vitae nemo voluptate.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} xl={3} className="d-flex justify-content-center">
          <Card className="contact-card">
            <Card.Img className="contact-img" variant="top" src="#" />
            <Card.Body>
              <Card.Title>Laure </Card.Title>
              <Card.Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Rem iure eos nihil veritatis nulla dolores ipsa beatae laudantium,
                sed error amet magnam saepe explicabo asperiores quas vitae nemo voluptate.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} xl={3} className="d-flex justify-content-center">
          <Card className="contact-card">
            <Card.Img className="contact-img" variant="top" src="#" />
            <Card.Body>
              <Card.Title>Victor </Card.Title>
              <Card.Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Rem iure eos nihil veritatis nulla dolores ipsa beatae laudantium,
                sed error amet magnam saepe explicabo asperiores quas vitae nemo voluptate.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>

    <div className="contact-form">
      <h2 className="contact-title">Nous Contacter</h2>

      <Form id="formContact">
        <fieldset>
          <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={2} />
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="Madame"
                name="Madame"
                id="radio1"
              />
              <Form.Check
                type="radio"
                label="Monsieur"
                name="Monsieur"
                id="radio2"
              />
              <Form.Check
                type="radio"
                label="Société ou Organisme"
                name="Soiété ou Organisme"
                id="radio3"
              />
            </Col>
          </Form.Group>
        </fieldset>
        <Form.Group as={Row} className="mb-3" id="formLastname">
          <Form.Label column sm={2}>
            Nom
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="lastname" placeholder="Nom" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" id="formFirstname">
          <Form.Label column sm={2}>
            Prénom
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="firstname" placeholder="Prénom" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-" id="formEmail">
          <Form.Label column sm={2}>
            Adresse Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Adresse Email" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" id="formSelect">
          <Form.Label column sm={2} htmlFor="Select">
            Je vous contacte pour:
          </Form.Label>
          <Col sm={10}>
            <Form.Select id="Select">
              <option>choisir...</option>
              <option>Un problème sur le site</option>
              <option>Je suis un organisme, je veux m'inscrire</option>
              <option>Autre</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" id="exampleForm.ControlTextarea1">
          <Form.Label column sm={2}>Message</Form.Label>
          <Col sm={10}>
            <Form.Control as="textarea" rows={3} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Envoyé</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  </div>

);
export default Contact;
