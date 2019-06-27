import React from 'react';
import { HashRouter as Router,Route} from 'react-router-dom';
import PositionCarousel from '../js/homepage.js';
import Bloghomepage from '../js/blog/bloghomepage.js';

function Myrouter() {
  return (
      <Router>
          <Route exact path="/" component={PositionCarousel} />
          <Route path="/wmjblog" component={Bloghomepage} />
      </Router>
  );
}

export default Myrouter;
