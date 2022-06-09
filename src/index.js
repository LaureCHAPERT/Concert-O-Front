// == Import : npm
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// == Import : local
// Components
import App from 'src/components/App';
import store from 'src/store';

// Bootstrap's Css
import 'bootstrap/dist/css/bootstrap.min.css';

// == Render
// 1. Root React element (the one that contains the entire app)
// => Creates Nested Object Structure (Virtual DOM)
const rootReactElement = (
  <Provider store={store}>
    <BrowserRouter>
      <App />;
    </BrowserRouter>
  </Provider>
);
// 2. The target of the DOM (where the structure is to come to life in the DOM)
const target = document.getElementById('root');
// 3. Trigger React (virtual) rendering =dom > (web page)
ReactDom.render(rootReactElement, target);
