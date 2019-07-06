import React from "react";
import {Route} from 'react-router-dom';
import Blogheader from './blogHeader.js';
import {Layout, Collapse, Row, Col} from 'antd';
import '../../css/bloghomepage.css';
import '../../css/App.css';
const {Panel} = Collapse;
const {Content,} = Layout;

class Bloghomepage extends React.Component {
    constructor(props) {
        super(props)
    }

    callback = (key) => {

    };

    render() {
        const text = ['我是一名研二在校学生，平常接触的项目基本上都是关于前端，也会关注于后端与数据库。目前主要使用的技术有html，css，javascript，jquery，bootstrap，bui，easyui，php，symfony以及mysql和sqlserver数据库。React框架是19年6月份开始自学。喜欢技术，喜欢优化，喜欢维护项目，热爱开发。希望可以得到大佬们的指点！','最开始做这个博客是经过同学介绍浏览了别人做的博客觉得很有意思，这个博客也是按照别人的博客模板来做的。同时我也希望通过做这个博客利用起我新学的React框架。暂时还没有后台与数据库，之后会租一个服务器来存数据，同时还想做一个管理系统使博客内容写起来更方便。所有的博客都是保存到json文件里的富文本内容，首次访问时json文件显示的很慢，之后会想想其他办法存放数据。目前博客只有简单的几篇，之后会慢慢扩展内容并且优化功能和界面。','微信/QQ：404216211','邮箱：404216211@qq.com','Github：wmjSymfony'];
        return (
            <Layout>
                <Blogheader selected={['3']}/>
                <Content style={{padding: '0.2rem', margin: '1rem'}}>
                    <Row type="flex" align="middle" justify="center">
                        <Col lg={16} md={18} sm={20} xs={22}>
                            <Collapse defaultActiveKey={['1','2','3']}  className='about-list-words' onChange={this.callback}>
                                <Panel header="关于我" key="1">
                                    <p>{text[0]}</p>
                                </Panel>
                                <Panel header="关于我的博客" key="2">
                                    <p>{text[1]}</p>
                                </Panel>
                                <Panel header="联系我" key="3">
                                    <p>{text[2]}</p>
                                    <p>{text[3]}</p>
                                    <p>{text[4]}</p>
                                </Panel>
                            </Collapse>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        )
    };

}
export default Bloghomepage;