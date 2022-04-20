import './contact.scss';
import {
  Form,
  Button,
  Col,
  Row,
  Card,
} from 'react-bootstrap';
import Elise from 'src/assets/images/Elise.jpg';
import Jeremy from 'src/assets/images/Jeremy.jpg';
import Laure from 'src/assets/images/Laure.jpg';
import Victor from 'src/assets/images/Victor.jpg';

const Contact = () => (
  <div>
    <div className="contact-card">
      <div className="presentation-div">
        <h1 id="presentation"> Qui sommes-nous ?</h1>
      </div>
      <Row>
        <Col xs={12} md={6} xl={3} className="d-flex justify-content-center">
          <Card className="contact-card">
            <Card.Img className="contact-img" variant="top" src={Elise} />
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
            <Card.Img className="contact-img" variant="top" src={Jeremy} />
            <Card.Body>
              <Card.Title>Jérémy </Card.Title>
              <Card.Text>
                Jérémy écoute depuis toujours de la musique pour se détendre et rêver.
                Ce fût donc tout naturellement qu'il se tourna vers ce projet
                ambitieux et motivant.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} xl={3} className="d-flex justify-content-center">
          <Card className="contact-card">
            <Card.Img className="contact-img" variant="top" src={Laure} />
            <Card.Body>
              <Card.Title>Laure </Card.Title>
              <Card.Text>
                Anciennement technicienne son et lumière dans un théâtre et passionnée par le mixage
                et  la musique  assisitée par ordinateur, le spectacle vivant fait partie de l'ADN
                de Laure.
                Amoureuse de musiques en tous genres  et guitariste depuis son adolescence,
                c'est tout naturellement qu'elle a eu l'idée d'un projet portant sur sa
                toute première passion.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} xl={3} className="d-flex justify-content-center">
          <Card className="contact-card">
            <Card.Img className="contact-img" variant="top" src={Victor} />
            <Card.Body>
              <Card.Title>Victor </Card.Title>
              <Card.Text>
                Passionné de musique depuis toujours et compositeur amateur
                à ses heures perdues (M.A.O, piano..), Victor a également
                travaillé en tant que technicien son/lumière en bénévolat
                puis en stages avant de s'orienter dans le milieu informatique.
                Il était donc évident pour nous comme pour lui de se joindre
                au projet afin de de partager sa passion liée à la musique !
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
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    label="Madame"
                    name="group1"
                    id="radio1"
                  />
                  <Form.Check
                    type={type}
                    label="Monsieur"
                    name="group1"
                    id="radio2"
                  />
                  <Form.Check
                    type={type}
                    label="Société ou Organisme"
                    name="group1"
                    id="radio3"
                  />
                </div>
              ))}
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
              <option>---</option>
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
            <Button type="submit">Envoyer</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  </div>

);
export default Contact;
