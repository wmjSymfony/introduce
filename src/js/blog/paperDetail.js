import React from "react";
import {Layout, Icon, Row, Col} from 'antd';
import Blogheader from './blogHeader.js';
import '../../css/bloghomepage.css';
const {Content,} = Layout;

class PaperDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            detail: "",
        };
    }

    componentDidMount() {
        let dataIndex = this.props.match.params.id;
        fetch(process.env.PUBLIC_URL + '/data/paperSource.json', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
            .then(response => response.json())
            .then(result => {
                this.setState({
                    data: result[dataIndex]
                });
            });
        fetch(process.env.PUBLIC_URL + '/data/paperDetail.json', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
            .then(response => response.json())
            .then(result => {
                this.setState({
                    detail: result[dataIndex].detail
                });
            });
    }

    render() {
        const data = this.state.data;
        const detail = this.state.detail;
        return (
            <Layout>
                <Blogheader/>
                <Layout>
                    <Content style={{padding: '0.2rem', margin: 0, minHeight: 280}}>
                        <Row type='flex' align='middle' justify='center' className='paper-body paper-detail-body'>
                            <Col lg={18} md={19} sm={20} xs={22} className='paper-layout' style={{boxShadow: "none"}}>
                                <Row type='flex' align='middle' justify='space-between' className='paper-title'>
                                    {data.title}
                                </Row>
                                <Row type='flex' align='middle' justify='space-between'
                                     className='paper-header'>
                                    <Col><Icon type="user"/>
                                        <label className='paper-header-words'>{data.author}</label>
                                    </Col>
                                    <Col><Icon className='paper-header-words' type="calendar"/>
                                        <label className='paper-header-words'>{data.date}</label>
                                    </Col>
                                    <Col><Icon className='paper-header-words' type="tag"/>
                                        <label className='paper-header-words'>{data.type}</label>
                                    </Col>
                                </Row>
                                <Layout type='flex' align='top' justify='space-between'
                                        className='paper-content paper-sider-words'
                                        dangerouslySetInnerHTML={{__html: detail}}>
                                </Layout>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </Layout>
        )

    }
}


export default PaperDetail;