// == Import
import Home from 'src/components/Home';
import Footer from '../Footer';
import AppHeader from '../AppHeader';
import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <AppHeader />
    <Home />
    <Footer />
  </div>
);

// == Export
export default App;
