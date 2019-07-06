import React from "react";
import {Button} from 'antd';
import ReactDOM from 'react-dom';

class buttonChangeSize extends React.Component {

    constructor(props) {
        super(props);//props是分类页面点分类列表引用这个组件dataPaperIndex=[1,2]/[1]
        this.state = {
            width: props.width || -1,
            buttonSize:'small',
        };
    }

    //节流函数
    throttle = (func, wait = 500) => {
        let previous = 0;
        return function () {
            let context = this;
            let args = arguments;
            let now = Date.now();

            if (now - previous > wait) {
                func.call(context, args);
                previous = now;
            }
        }
    };

    componentDidMount() {
        this.updateSize();
        window.addEventListener('resize', this.throttle(this.updateSize.bind(this)));
    }

    updateSize() {
        try {
            let root = document.getElementById('root');
            const parentDom = ReactDOM.findDOMNode(root);
            let { widths } = this.props;
            if (!widths) {
                widths = parentDom.getBoundingClientRect().width;
            }
            this.setState({width:widths});
            this.changeSize();
        } catch (ignore) {}
    }

    componentWillUnmount() { //一定要最后移除监听器，以防多个组件之间导致this的指向紊乱
        window.removeEventListener('resize', this.throttle(this.updateSize.bind(this)));
    }

    changeSize = () => {
        let width = this.state.width;
        //需要一个节流函数
        if (width < 768) {
            this.setState({
                buttonSize: 'small'
            });
            console.log(this.state);
        } else if (width >= 768) {
            this.setState({
                buttonSize: 'default'
            });
        }
    };

    // handleResize = (e) => {
    //     let width = e[0].target.innerWidth;
    //     this.changeSize(width);
    // };

    render() {
        const buttonSize = this.state.buttonSize;
        return (
            <Button type={this.props.type} shape="round" size={buttonSize}>
                {this.props.buttonval}
            </Button>

        )

    }
}

export default buttonChangeSize;