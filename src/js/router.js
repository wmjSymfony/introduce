import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import PositionCarousel from '../js/homepage.js';//首页轮播图
import Bloghomepage from '../js/blog/bloghomepage.js';//所有blog列表
import Blogtype from '../js/blog/blogtype.js';//分类列表
import blogDetail from '../js/blog/blogDetail.js';//blog详情
import blogTypeInclude from '../js/blog/blogTypeInclude.js';//每个类别的blog列表

function App() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={PositionCarousel}/>
                <Route path="/wmjblog" component={Bloghomepage}/>
                <Route path="/blogtype" component={Blogtype}/>
                <Route path="/blogDetail/:id" component={blogDetail}/>
                <Route path="/blogTypeInclude/:id" component={blogTypeInclude}/>
            </div>
        </Router>
    );
}

export default App;
