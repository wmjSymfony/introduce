import React from "react";
import {Link} from 'react-router-dom';
import {Layout, Menu} from 'antd';
const {Header} = Layout;

class Blogheader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Header className="header">
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={this.props.selected}
                        style={{lineHeight: '64px'}}
                    >
                        <Menu.Item key="1"><Link to="/wmjblog">首页</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/Blogtype">文章分类</Link></Menu.Item>
                    </Menu>
                </Header>
        )

    }
}


export default Blogheader;