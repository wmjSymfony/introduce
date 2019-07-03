import React from "react";
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom'
import {Layout, Menu, Icon, Row, Col, Button,Pagination} from 'antd';
import '../../css/bloghomepage.css';
import '../../css/App.css';
import vue from '../../img/vue_logo.png';
const {Header, Content,} = Layout;

class Bloghomepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total:0,//json数据总条数
            page:1,//当前页码
            pageSize:5,//一页的总条数
            dataTotal:[],//json文件的所有数据
            data: [],//当前页面显示的json文件
        };
    }

    componentDidMount() {
        this.getData();
    }

    //获取列表
    getData=()=> {
        let nowPage = this.state.page - 1;
        let pageSize = this.state.pageSize;
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
                    total: result.length,
                    dataTotal: result,
                    data: result.slice(nowPage, pageSize)
                });
            });
    };

    //改变页码
    onChange = page => {
        let nowPage = page - 1;
        let pageSize = this.state.pageSize;
        let endData = (pageSize * page) >= this.state.total ? this.state.total : (pageSize * page);

        this.setState({
            page: page,
            data: this.state.dataTotal.slice(nowPage * pageSize, endData)
        });
    };

    paperDetail = (index) => {
        let path = `/paperDetail/${index}`;
        this.props.history.push(path);
    };

    render() {
        const dataSource = this.state.data;
        const pagination={
            current:this.state.page,
            pageSize:this.state.pageSize,
            total:this.state.total,
            onChange:this.onChange
        };
        return (
            <Layout>
                <Header className="header">
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{lineHeight: '64px'}}
                    >
                        <Menu.Item key="1"><Link to="/wmjblog">首页</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/Blogtype">文章分类</Link></Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Content style={{padding: '0.2rem', margin: 0, minHeight: 280}}>
                        { dataSource.map((data, index) => {
                                return (
                                    <Row key={index} type='flex' align='middle' justify='center' className='paper-body'>
                                        <Col lg={18} md={19} sm={20} xs={22} className='paper-layout'>
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
                                            <Row type='flex' align='top' justify='space-between'
                                                 className='paper-content'>
                                                <Col span={4}>
                                                    <img onClick={() => {
                                                        this.paperDetail(index)
                                                    }}
                                                        src={vue} className='paper-sider-img'/>
                                                </Col>
                                                <Col span={16} offset={4} type='flex' align='bottom'
                                                     className='paper-sider-words'>
                                                    {data.content}
                                                </Col>
                                            </Row>
                                            <Row type='flex' align='middle' justify='end' className='paper-footer'>
                                                <Button onClick={() => {
                                                    this.paperDetail(index)
                                                }}
                                                        className='paper-footer-readmore' type="primary" size="small">
                                                    阅读全文
                                                </Button>
                                            </Row>
                                        </Col>
                                    </Row>
                                )
                            }
                        )}
                        <Row type='flex' align='middle' justify='center' style={{margin:'2rem 0'}}><Pagination {...pagination} /></Row>
                    </Content>
                </Layout>
            </Layout>
        )

    }
}


export default Bloghomepage;