import React from "react";
import Bloghomepage from './bloghomepage';
import {Layout} from 'antd';
import '../../css/bloghomepage.css';
import '../../css/App.css';

class BlogTypeInclude extends React.Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        const dataPaperIndex  = JSON.parse(this.props.match.params.id);
        return (
            <Layout>
                <Bloghomepage selected={[]} dataPaperIndex={dataPaperIndex} history={this.props.history}/>
            </Layout>
        )

    }
}


export default BlogTypeInclude;