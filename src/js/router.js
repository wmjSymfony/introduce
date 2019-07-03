import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import PositionCarousel from '../js/homepage.js';
import Bloghomepage from '../js/blog/bloghomepage.js';
import Blogtype from '../js/blog/blogtype.js'
import PaperDetail from '../js/blog/paperDetail.js'

function App() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={PositionCarousel}/>
                <Route path="/wmjblog" component={Bloghomepage}/>
                <Route path="/blogtype" component={Blogtype}/>
                <Route path="/paperDetail/:id" component={PaperDetail}/>
            </div>
        </Router>
    );
}

export default App;
