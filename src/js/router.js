import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import PositionCarousel from '../js/homepage.js';
import Bloghomepage from '../js/blog/bloghomepage.js';
import Blogtype from '../js/blog/blogtype.js'

function App() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={PositionCarousel}/>
                <Route path="/wmjblog" component={Bloghomepage}/>
                <Route path="/blogtype" component={Blogtype}/>
            </div>
        </Router>
    );
}

export default App;
