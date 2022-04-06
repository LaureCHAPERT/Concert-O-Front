// Import
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import react-Bootstrap's component(s)
import {
  Row,
} from 'react-bootstrap';

// import component(s)
import CategoryCard from 'src/components/CategoryCard';

// Import Action(s)
import { fetchRegions } from '../../actions/regions';

// import styles
import './regions.scss';

const Regions = () => {
  const dispatch = useDispatch();
  // we retrieve the table of messages in the state
  const { regionsList } = useSelector((state) => state.regions);

  useEffect(() => {
    dispatch(fetchRegions());
  }, []);

  return (
    <div className="cardGrid">
      <Row>
        {regionsList.map((item) => (
          <CategoryCard key={item.id} {...item} />
        ))}
      </Row>
    </div>
  );
};

export default Regions;
