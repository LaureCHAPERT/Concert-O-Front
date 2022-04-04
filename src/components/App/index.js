// == Import : yarn
import { Route, Routes } from 'react-router-dom';

// == Import components
import Home from 'src/components/Home';
import Footer from '../Footer';
import AppHeader from '../AppHeader';
import './app.scss';

// == Component
const App = () => (      
  <div className="app">
    <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="regions" element={<Regions />} />
        <Route path="genres" element={<Genres />} />
      </Routes>
    <Footer />
  </div>
);
// == Export
export default App;
