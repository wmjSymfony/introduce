import React from "react";
import {Layout, List, Row, Col} from 'antd';
import Blogheader from './blogHeader';
const {Content,} = Layout;

class Blogtype extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],//要显示的列表内容
            totalData: [],//json文件里的所有内容
        };
        this.clickList = this.clickList.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        //箭头函数不需要在构造函数中绑定this
        let dataSource = fetch(process.env.PUBLIC_URL + '/data/blogSource.json', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accpet': 'application/json'
            }
        });
        dataSource.then((response) => {
            return response.json();
        }).then((result) => {
            let dataObj = {};
            result.forEach(function (value) {
                dataObj[value.type] = dataObj[value.type] + 1 || 1;
            });
            let dataArr = [];
            for (let i in dataObj) {
                let str = i + '（' + dataObj[i] + '）';
                dataArr.push(str);
            }
            this.setState({data: dataArr, totalData: result});
        });
    };

    clickList  (e)  {
        let listValue = e.target.innerHTML;
        let subIndex = listValue.indexOf("（");
        let listSubValue = listValue.substring(0,subIndex);
        let jumpJsonIndex = [];
        this.state.totalData.forEach(function(value, index){
            if(value.type == listSubValue){
                jumpJsonIndex.push(index);
            }
        });
        jumpJsonIndex = JSON.stringify(jumpJsonIndex);
        let path = `/blogTypeInclude/${jumpJsonIndex}`;
        this.props.history.push(path); //详情页按照顺序
        console.log(jumpJsonIndex);//[1] [1,2]
    };

    render() {
        return (
            <Layout>
                <Blogheader selected={['2']}/>
                <Content style={{padding: '0.2rem', margin: '1rem'}}>
                    <Row type="flex" align="middle" justify="center">
                        <Col lg={18} md={19} sm={20} xs={22}>
                            <div>
                                <List style={{backgroundColor: 'white'}} className='detail-type-list'
                                      size="large"
                                      onClick={this.clickList}
                                      bordered
                                      dataSource={this.state.data}
                                      renderItem={item => (
                                          <List.Item>
                                              {item}
                                          </List.Item>
                                      )}
                                />
                            </div>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        )
    }
}


export default Blogtype;