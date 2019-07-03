import React from "react";
import {Layout} from 'antd';

class PaperDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
        };
    }

    componentDidMount() {
        let dataIndex = this.props.match.params.id;
        fetch('/data/paperSource.json', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
            .then(response => response.json())
            .then(result => {
                this.setState({
                    data:result[dataIndex]
                });
            });
    }

    render() {
        return (
            <Layout>
            </Layout>
        )

    }
}


export default PaperDetail;