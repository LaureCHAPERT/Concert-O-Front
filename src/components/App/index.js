// == Import : yarn
import { Route, Routes } from 'react-router-dom';

// == Import components
import Home from 'src/components/Home';
import Footer from '../Footer';
import AppHeader from '../AppHeader';
import Regions from '../Regions';
import Genres from '../Genres';
import EventDetail from '../EventDetail';

import './app.scss';
import EventsList from '../EventsList';

// == Component
const App = () => (
  <div className="app">
    <AppHeader />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/regions" element={<Regions />} />
      <Route path="/genres" element={<Genres />} />
      <Route path="/detail" element={<EventDetail />} />
      <Route path="/evenements" element={<EventsList />} />
    </Routes>
    <Footer />
  </div>
);
// == Export
export default App;
