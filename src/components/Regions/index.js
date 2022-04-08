// Import
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import react-Bootstrap's component(s)
import {
  Row,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

// import component(s)
import CategoryCard from 'src/components/CategoryCard';

// Import Action(s)
import { fetchRegions } from '../../actions/regions';

// import styles
import './regions.scss';

const Regions = () => {
  const dispatch = useDispatch();
  // we retrieve the table of messages in the state
  const categoryCard = useSelector((state) => state.regions.regionsList);
  useEffect(() => {
    dispatch(fetchRegions());
  }, []);
  return (
    <LinkContainer to="/evenements" style={{ cursor: 'pointer' }}>
      <Row>
        {categoryCard.map((item) => (
          <CategoryCard key={item.id} {...item} />
        ))}
      </Row>
    </LinkContainer>
  );
};

export default Regions;
