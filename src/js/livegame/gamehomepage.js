import React from 'react';
import {Layout, Row, Col, Button, Input, Slider, Select, Table} from 'antd';
import {LifeGameTable} from './createGameTable.js';
import '../../css/livegame.css';
const {Content} = Layout;
const {Option} = Select;

//节流函数
function throttle(func, wait = 500) {
    var previous = 0;
    return function () {
        let context = this;
        let args = arguments;
        let now = Date.now();
        if (now - previous > wait) {
            console.log(func);
            func.apply(context, args);
            previous = now;
        }
    }
}

class LiveGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderDisabled: false,
            width: 20,
            height: 20,
            table: [],
            tableClass: {},
            speed: 1000,
            timer: {}
        }
    }

    componentWillMount() {
        let game = new LifeGameTable(this.state.width, this.state.height);
        this.setState({tableClass: game, table: game.getEmptyView()});
    }

    //开始根据表格状态进行下一步
    start = () => {
        this.pause();
        //根据当前表格状态，设置计时器，循环进入下一步
        let timer = setInterval(() => {
            this.setState({table: this.state.tableClass.dynamic(this.state.table)});
        }, this.state.speed);
        this.setState({timer: timer});
    };

    //暂停得到表格下一步
    pause = () => {
        clearInterval(this.state.timer);
        this.setState({timer: 0});
    };

    //暂停得到表格下一步
    next = () => {
        this.pause();
        this.setState({table: this.state.tableClass.dynamic(this.state.table)});
    };

    //得到一个新的空表格
    restart = () => {
        this.pause();
        this.setState({table: this.state.tableClass.getEmptyView()});
    };

    //得到一个随机的表格
    random = () => {
        this.pause();
        this.setState({table: this.state.tableClass.getRandomView()});
    };

    //改变表格大小，改变后默认置空表
    changeCellSize = () => {
        console.log(1);
        let width = parseInt(this.refs.cellWidth.state.value,10);
        let height = parseInt(this.refs.cellHeight.state.value,10);
        this.setState({
            width: width,
            height: height
        },() => {
            let game = new LifeGameTable(this.state.width, this.state.height);
            this.setState({tableClass: game, table: game.getEmptyView()});
        });
    };

    //改变速度
    changeSpeed = (value) => {
        this.setState({
            speed: value
        });
        if(this.state.timer){
            this.pause();
            this.start();
        }else{
            this.pause();
        }
    };

    render() {
        const sliderDisabled = this.state.sliderDisabled;
        const table = this.state.table;
        return (
            <Layout style={{margin: '1rem'}}>
                <Row className="live-game-header">LiveGame</Row>
                <Content style={{padding: '1rem'}}>
                    <Row type="flex" align="middle" justify="center">
                        <Col lg={16} md={18} sm={20} xs={24} type="flex" align="middle" justify="center">
                            <Row type='flex' align='middle' justify='center'>
                                <Button type="primary" size="small" onClick={this.start}>start</Button>
                                <Button type="primary" size="small" onClick={this.pause}>pause</Button>
                                <Button type="primary" size="small" onClick={this.next}>next</Button>
                                <Button type="primary" size="small" onClick={this.restart}>restart</Button>
                                <Button type="primary" size="small" onClick={this.random}>random</Button>
                            </Row>
                            <Row type='flex' align='middle' justify='center' style={{margin: '10px 0 17px 0'}}>
                                <div>初始游戏状态设定：</div>
                                <Select
                                    value={'状态一'}
                                    size='small'
                                    style={{width: '40%'}}
                                    // onChange={this.handleCurrencyChange}
                                >
                                    <Option value="1">状态一</Option>
                                    <Option value="2">状态二</Option>
                                </Select>
                            </Row>
                            <Row type='flex' align='middle' justify='center'>
                                <Col lg={8} md={10} sm={10} xs={8}>
                                    <Input ref="cellWidth" type='number' onChange={this.changeCellWidth}
                                           placeholder="网格宽度"/>
                                </Col>
                                <Col lg={8} md={10} sm={10} xs={8} style={{marginLeft: '10px'}}>
                                    <Input ref="cellHeight" type='number' onChange={this.changeCellHeight}
                                           placeholder="网格高度"/>
                                </Col>
                                <Button size="small" className='change-cell-size'
                                        onClick={this.changeCellSize}>submit</Button>
                            </Row>
                            <Row type='flex' align='middle' justify='center'>
                                <Col lg={4} md={5} sm={6} xs={8} style={{textAlign: 'left'}}>速度控制器:</Col>
                                <Col lg={12} md={15} sm={14} xs={14}>
                                    <Slider defaultValue={1000} min={200} max={1000} disabled={sliderDisabled}
                                            onChange={throttle(this.changeSpeed)}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row type="flex" align="middle" justify="center">
                        <Col lg={16} md={18} sm={20} xs={24} type="flex" align="middle" justify="center">
                            <table border='0'>
                                <tbody>
                                {
                                    table.map((data, tableindex) => {
                                        return (
                                            <tr key={tableindex}>
                                                {data.map((cell, cellindex) => {
                                                    let liveState = (cell.state == 1) ? 'live-td' : 'dead-td';
                                                    return (
                                                        <td key={cellindex} className={liveState}>
                                                        </td>
                                                    )
                                                })}
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        )
    }
}

export default LiveGame