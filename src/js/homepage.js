import React from "react";
import {Link} from 'react-router-dom';
import '../css/homepage.css';
import blog from '../img/blog.png';
import github from '../img/github.svg';
import html5 from '../img/h5.png';
import jquery from '../img/jquery.png';
import css3 from '../img/css3.png';
import reactlogo from '../img/react.svg';
import antd from '../img/antd.svg';
import symfony from '../img/symfony.svg';
import bui from '../img/bui.png';
import php from '../img/php.svg'
import bootstrap from '../img/bootstrap.jpg';
import javascript from '../img/javascript.png';
import {Carousel, Row, Col} from "antd";
import QueueAnim from 'rc-queue-anim';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';

class PositionCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageColor: 'page-deep-color',
            firstpage: true,
            secondpage: false,
            thirdpage: false,
            firstY: 0,
            endY: 0,
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next() {
        this.slider.slick.slickNext();
    }

    previous() {
        this.slider.slick.slickPrev();
    }

    componentDidMount() {
    }

    handleScroll = (e) => {
        if (e.nativeEvent.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
            if (e.nativeEvent.wheelDelta > 0) { //当滑轮向上滚动时
                this.previous();//自带节流函数
            }
            if (e.nativeEvent.wheelDelta < 0) { //当滑轮向下滚动时
                this.next();
            }
        }
    };

    //第二个页面文字退场
    getEnter = () => {
        return {
            delay: 0,
            opacity: 0
        };
    };

    NavonTouchStart = (e) => {
        this.setState({
            firstY: e.targetTouches[0].clientY,
        })
    };

    NavonTouchMove = (e) => {
        this.setState({
            endY: e.changedTouches[0].clientY,
        });
        let moveY = this.state.endY - this.state.firstY;
        if (Math.abs(moveY) > 100) {
            moveY > 0 ? this.next() : this.previous();
        }
    };

    render() {
        const that = this;
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            swipe: false,
            dotPosition: 'right',
            slidesToScroll: 1,
            className: this.state.pageColor,
            beforeChange(oldIndex, newIndex){
                switch (newIndex) {
                    case 0:
                        that.setState({
                            firstpage: true,
                            secondpage: false,
                            pageColor: 'page-deep-color'
                        });
                        break;
                    case 1:
                        that.setState({
                            firstpage: false,
                            secondpage: true,
                            thirdpage: false,
                            pageColor: 'page-light-color'
                        });
                        break;
                    case 2:
                        that.setState({
                            firstpage: false,
                            secondpage: false,
                            thirdpage: true,
                            pageColor: 'page-light-color'
                        });
                }
            }
        };
        const skillArr = [{src: html5, title: 'html5'}, {src: css3, title: 'css3'}, {
            src: javascript,
            title: 'javascript'
        }, {src: jquery, title: 'jquery'}, {src: bootstrap, title: 'bootstrap'}, {
            src: reactlogo,
            title: 'react'
        }, {src: antd, title: 'antd'}, {src: bui, title: 'bui'}, {src: php, title: 'php'}, {
            src: symfony,
            title: 'symfony'
        }];
        return (
            <Carousel type="flex" justify="center" align="middle" {...settings}
                      ref={(c) => (this.slider = c)} id="test">
                <Row onClick={this.onClick} className="first-page" justify="center" align="middle"
                     onWheel={this.handleScroll} onTouchStart={this.NavonTouchStart.bind(this)}
                     onTouchMove={this.NavonTouchMove.bind(this)}>
                    <Row id="page-first-content" className="self-carousel-content" justify="center" type="flex">
                        <QueueAnim delay={200} className="queue-simple">
                            {this.state.firstpage ? [
                                <Row type="flex" justify="center" key="a" align="middle">
                                    <Col span={24}>
                                        <h3>I'm WangMengjia</h3>
                                    </Col>
                                </Row>
                            ] : null}
                            {this.state.firstpage ? [
                                <Row type="flex" key="b" justify="center" align="middle" style={{margin: '1rem 0'}}>
                                    <Col span={24}>
                                        <p style={{color: '#76ffc1'}}>Want to be a professional computer engineer</p>
                                    </Col>
                                </Row>
                            ] : null}
                            {this.state.firstpage ? [
                                <Row type="flex" key="c" justify="center" align="middle">
                                    <Col span={6} justify="center">
                                        <Link className="self-link" to={{ pathname: '/wmjblog' }} title="My Blog" target="_blank"><img
                                            src={blog}/></Link>
                                        <div>我的博客</div>
                                    </Col>
                                    <Col span={6}>
                                        <a className="self-link" href="https://github.com/wmjSymfony" title="My GitHub"
                                           target="_blank">
                                            <img src={github}/>
                                        </a>
                                        <div>我的GitHub</div>
                                    </Col>
                                    <Col span={6}>
                                        <Link className="self-link" to={{ pathname: '/liveGame' }} title="LifeGame"
                                           target="_blank">
                                            <img src={reactlogo}/>
                                        </Link>
                                        <div>React小游戏</div>
                                    </Col>
                                </Row>
                            ] : null}
                        </QueueAnim>
                    </Row>
                </Row>
                <Row className="second-page" justify="center" align="middle" onWheel={this.handleScroll}
                     onTouchStart={this.NavonTouchStart.bind(this)} onTouchMove={this.NavonTouchMove.bind(this)}>
                    <Row id="page-second-content" className="self-carousel-content" justify="center" type="flex">
                        <Col span={24} style={{color: 'white'}}>
                            <div className="texty-demo">
                                <Texty
                                    leave={this.getEnter}>{this.state.secondpage && 'Committed to front-end development'}</Texty>
                            </div>
                            <div className="texty-demo" style={{margin: '1rem 0'}}>
                                <Texty
                                    leave={this.getEnter}>{this.state.secondpage && 'like front-end technology'}</Texty>
                            </div>
                            <div className="texty-demo">
                                <Texty
                                    leave={this.getEnter}>{this.state.secondpage && 'Also know the back-end development'}</Texty>
                            </div>
                        </Col>
                    </Row>
                </Row>
                <Row className="third-page" onWheel={this.handleScroll} onTouchStart={this.NavonTouchStart.bind(this)}
                     onTouchMove={this.NavonTouchMove.bind(this)}>
                    <Row id="page-third-content" className="self-carousel-content" style={{display: 'block'}}
                         justify="center" type="flex">
                        <QueueAnim delay={300} className="queue-simple" animConfig={[
                            {opacity: [1, 0], translateY: [0, 50]},
                            {opacity: [1, 0], translateY: [0, 50]}
                        ]}>
                            {this.state.thirdpage ? [
                                <p key="a" style={{margin: '1rem'}}>以下就是我的技能标签啦</p>
                            ] : null}
                            {this.state.thirdpage ? [
                                <Row key="b"  justify="center" type="flex">
                                    <Col lg={15} md={18} sm={20} xs={22}  justify="center" align="middle" type="flex">
                                        <Row justify="center" align="middle" type="flex">
                                    {
                                        skillArr.map((item,index) => (
                                            <Col key={index} lg={3} md={4} sm={4} xs={6} justify="center" align="middle">
                                                <Row justify="center" align="middle" style={{margin: "0.3rem"}}>
                                                    <img src={item.src} style={{width: '30px', height: '30px'}}/>
                                                </Row>
                                                <Row justify="center" align="middle" style={{margin: "0.1rem"}}>
                                                    <div>{item.title}</div>
                                                </Row>
                                            </Col>
                                        ))
                                    }
                                        </Row>
                                    </Col>
                                </Row>
                            ] : null}
                        </QueueAnim>
                    </Row>
                </Row>
            </Carousel>
        );
    }
}

export default PositionCarousel;