import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import store from './app/store';
import Nav from './components/Nav';
import Categories from './components/Categories';

const Routing = () => (
  <Router>
    <Nav />
    <Route exact path="/" component={App} />
    <Route path="/Categories" component={Categories} />
    {/* <Route path="/service" component={Service} /> */}
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <Routing />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
