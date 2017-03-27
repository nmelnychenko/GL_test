import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './containers/App';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

render(
      <Router history={browserHistory}>
          <Route path='/' component={App}>
              <IndexRoute path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/skills' component={Skills} />
              <Route path='/contact' component={Contact} />
          </Route>
      </Router>,
  document.getElementById('root')
)
