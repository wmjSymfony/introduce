import React from "react";
import {Link} from 'react-router-dom'
import {Layout, Menu, Icon, Row, Col, Button} from 'antd';
import '../../css/bloghomepage.css';
import '../../css/App.css';
import vue from '../../img/vue_logo.png';
const {Header, Content,} = Layout;

class Bloghomepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                title: '我是标题',
                author:'我是作者',
                date:'2019-01-20',
                type:'vue',
                content:'我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容'
            },{
                title: '我是标题',
                author:'我是作者',
                date:'2019-01-20',
                type:'vue',
                content:'我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容'
            }],
        };
    }

    render() {
        const dataSource = this.state.data;
        return (
            <Layout>
                <Header className="header">
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{lineHeight: '64px'}}
                    >
                        <Menu.Item key="1">首页</Menu.Item>
                        <Menu.Item key="2"><Link to="/Blogtype">文章分类</Link></Menu.Item>
                    </Menu>
                </Header>
                <Layout style={{padding: '0 10%'}}>
                    <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280,}}>
                        { dataSource.map((data) =>
                            <Row type='flex' align='middle' justify='center' id="sss" className='paper-layout'>
                                <Col lg={18} md={18} sm={20} xs={22}>
                                    <Row type='flex' align='middle' justify='space-between' className='paper-title'>
                                        {data.title}
                                    </Row>
                                    <Row type='flex' align='middle' justify='space-between' className='paper-header'>
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
                                    <Row type='flex' align='start' justify='space-between' className='paper-content'>
                                        <Col span={4}>
                                            <img
                                                src={vue} className='paper-sider-img'/>
                                        </Col>
                                        <Col span={16} offset={4} type='flex' align='end' className='paper-sider-words'>
                                            {data.content}
                                        </Col>
                                    </Row>
                                    <Row type='flex' align='middle' justify='end' className='paper-footer'>
                                        <Button className='paper-footer-readmore' type="primary" size="small">
                                            阅读全文
                                        </Button>
                                    </Row>
                            </Col>
                        </Row>
                        )}
                    </Content>
                </Layout>
            </Layout>
        )

    }
}


export default Bloghomepage;