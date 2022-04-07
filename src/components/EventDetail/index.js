import './eventDetail.scss';
import image from 'src/assets/images/festival.jpg';
import {
  Container,
  Image,
  Badge,
} from 'react-bootstrap';

const EventDetail = () => (

  <Container id="eventDetail" fluid>
    <Image variant="top" src={image} />
    <h2 className="title">
      Titre <Badge bg="secondary">New</Badge>
    </h2>
    <div className="price">Prix €</div>
    <div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident temporibus facere minus ea recusandae voluptatum totam ullam accusamus delectus. Reiciendis autem labore neque ad, facilis officiis deleniti expedita debitis modi rem eligendi totam a eos mollitia explicabo corporis libero earum repellendus magni laudantium quisquam, fuga ut. Ex, fugit reprehenderit? Laboriosam optio esse, architecto aliquid delectus atque temporibus amet itaque numquam veritatis pariatur ipsa animi aliquam ullam. Eius obcaecati dolorum saepe blanditiis, quae autem dignissimos possimus tempore. Distinctio quasi aspernatur ipsam perspiciatis autem quae error molestiae, consequatur quas! Excepturi pariatur fugiat architecto, accusamus illum ut amet soluta perferendis sapiente, nesciunt omnis?</div>
    <a href="#">Region</a>
    <a href="#">Billeterie</a>
  </Container>
);

export default EventDetail;
