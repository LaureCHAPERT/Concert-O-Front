// == Import : yarn
import { Route, Routes } from 'react-router-dom';

// == Import components
import Home from 'src/components/Home';
import Footer from '../Footer';
import AppHeader from '../AppHeader';
import Regions from '../Regions';
import Genres from '../Genres';
import EventDetail from '../EventDetail';
import EventsList from '../EventsList';
import Legal from '../Legal';
import Contact from '../Contact';
import NotFound from '../NotFound';
import './app.scss';

// == Component
const App = () => (
  <div className="app">
    <AppHeader />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/regions" element={<Regions />} />
      <Route path="/genres" element={<Genres />} />
      <Route path="/evenement/:slug" element={<EventDetail />} />
      <Route path="/mentions-legales" element={<Legal />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resultats-evenements" element={<EventsList />} />
      <Route path="/tous-les-evenements" element={<EventsList />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </div>
);
// == Export
export default App;
