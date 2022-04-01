// == Import
import Event from 'src/components/Event';
import EventsList from 'src/components/EventsList';
import AppHeader from 'src/components/AppHeader';
import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <AppHeader />
    <Event />
    <EventsList />
    <h1>Composant : App</h1>
  </div>
);

// == Export
export default App;
