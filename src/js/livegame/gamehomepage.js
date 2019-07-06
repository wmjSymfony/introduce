import React from 'react';
import {Layout, Row, Col, Button} from 'antd';
import '../../css/livegame.css';
const {Content} = Layout;

class LiveGame extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout style={{margin: '1rem'}}>
                <Row className="live-game-header">LiveGame</Row>
                <Content style={{padding: '0.2rem'}}>
                    <Row type="flex" align="middle" justify="center">
                        <Col lg={16} md={18} sm={20} xs={22} type="flex" align="middle" justify="center">
                            <Button size="small">start</Button>
                            <Button size="small">pause</Button>
                            <Button size="small">restart</Button>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        )
    }
}

export default LiveGame