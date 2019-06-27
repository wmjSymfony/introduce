import React from "react";
import { Link } from 'react-router-dom';
import '../css/homepage.css';
import github from '../img/github.png';
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

const $ = require('jquery');

function throttle(func,wait=500) {
    let previous = 0;
    return function () {
        let context = this;
        let args = arguments;
        let now = Date.now();

        if (now - previous > wait) {
            func.apply(context, args);
            previous = now;
        }
    }
}


class PositionCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            e:'',
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
        $('#page-first-content').slideDown("slow");
    }

    handleScroll = throttle(()=>{
        this.setState({e:window.event});
        if (this.state.e && this.state.e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
            if (this.state.e.wheelDelta > 0) { //当滑轮向上滚动时
                this.previous();
            }
            if (this.state.e.wheelDelta < 0) { //当滑轮向下滚动时
                this.next();
            }
        } else if (this.state.e.detail) {  //Firefox滑轮事件
            if (this.state.e.detail > 0) { //当滑轮向上滚动时
                this.previous();
            }
            if (this.state.e.detail < 0) { //当滑轮向下滚动时
                this.next();
            }
        }
    });

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            swipe: false,
            dotPosition: 'right',
            afterChange(index){
                switch (index) {
                    case 0:
                        $('.ant-carousel-vertical .slick-dots li.slick-active button').css({
                            'border': '1px solid #5affab',
                            'background': '5affab'
                        });
                        $(".ant-carousel-vertical .slick-dots li button").css('border', '1px solid #5affab');
                        $('#page-first-content').slideDown("slow");
                        $('.third-page .self-carousel-content').slideUp("slow");
                        break;
                    case 1:
                        $('.ant-carousel-vertical .slick-dots li.slick-active button').css({
                            'border': '1px solid black',
                            'background': 'black'
                        });
                        $(".ant-carousel-vertical .slick-dots li button").css('border', '1px solid black');
                        $('#page-first-content').slideUp("slow");
                        $('.third-page .self-carousel-content').slideUp("slow");
                        $("#page-second-content").animate({width: "150%"}, 500);
                        $("#page-second-content").animate({width: "100%"}, 600);
                        break;
                    case 2:
                        $('.ant-carousel-vertical .slick-dots li.slick-active button').css({
                            'border': '1px solid black',
                            'background': 'black'
                        });
                        $(".ant-carousel-vertical .slick-dots li button").css('border', '1px solid black');
                        $('#page-first-content').slideUp("slow");
                        $('.third-page .self-carousel-content').slideDown("slow");
                        break;
                    default:

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
            <Carousel type="flex" justify="center" align="middle" {...settings} ref={c => (this.slider = c)}>
                <Row className="first-page" justify="center" align="middle" onWheel={this.handleScroll}>
                    <Row id="page-first-content" className="self-carousel-content" justify="center" align="middle"
                         style={{display: 'none'}}>
                        <Row type="flex" justify="center" align="middle">
                            <Col span={24}>
                                <h3>I'm WangMengjia</h3>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" align="middle" style={{margin: '1rem 0'}}>
                            <Col span={24}>
                                <p style={{color: '#76ffc1'}}>Want to be a professional computer engineer</p>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" align="middle">
                            <Col span={6} justify="center">
                                <Link className="self-link" to="/wmjblog"><img src={github}/></Link>
                            </Col>
                            <Col span={6}>
                                <a className="self-link" href="https://github.com/wmjSymfony" target="_blank">
                                    <img src={github}/>
                                </a>
                            </Col>
                        </Row>
                    </Row>
                </Row>
                <Row className="second-page" justify="center" align="middle" onWheel={this.handleScroll}>
                    <Row id="page-second-content" className="self-carousel-content" style={{display: 'block'}}
                         justify="center" type="flex">
                        <Col span={24} style={{color: 'white'}}>
                            <p>Committed to front-end development</p>
                            <p style={{margin: '1rem 0'}}>like front-end technology</p>
                            <p>Also know a little about the back-end development</p>
                        </Col>
                    </Row>
                </Row>
                <Row className="third-page">
                    <Row id="page-third-content" className="self-carousel-content" style={{display: 'none'}} onWheel={this.handleScroll}>
                        <p style={{margin: '1rem'}}>以下就是我的技能标签啦</p>
                        <Row justify="center" type="flex">
                            {
                                skillArr.map((item) => (
                                    <Col lg={2} md={3} sm={4} xs={6} justify="center" align="middle">
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
                    </Row>
                </Row>
            </Carousel>
        );
    }
}

export default PositionCarousel;