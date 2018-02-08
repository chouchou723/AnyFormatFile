class Block extends Component {
  shouldComponentUpdate = () => false;
}
//当 VDOM tree 发生状态改变的时候, 不要去再次渲染该组件

class Link extends BoundComponent {//拓展组件
    bind = ['click'];
    click() {
        open(this.props.href);
    }
    render({ children }) {
        let { click } = this.binds();
        return <span onClick={ click }>{ children }</span>;
    }
}

render(
    <Link href="http://example.com">Click Me</Link>,
    document.body
);


生命周期方法	触发时机
componentWillMount	在 component 插入 DOM 前调用
componentDidMount	在 component 插入 DOM 后调用
componentWillUnmount	在 component 移除前调用
componentWillReceiveProps	在 component 获取新的 props 前调用
shouldComponentUpdate	在 render() 返回 false 来跳过渲染前调用
componentWillUpdate	在 render() 调用之前
componentDidUpdate	在 render() 调用之后
//
import { Component } from 'preact';
import { render } from 'preact';

class MyComponent extends Component {
    shouldComponentUpdate(nextProps, nextState) {}
    componentWillReceiveProps(nextProps, nextState) {
        this.props // Previous props
        this.state // Previous state
    }
    componentWillMount() {}
    componentDidMount() {}
    componentDidUpdate() {}
    componentWillUnmount() {
        this.props // Current props
        this.state // Current state
    }
    render(props, state) {
        // props === this.props
        // state === this.state

        return <h1>Hello, {props.name}!</h1>;
    }
}

// 下面这些例子展示了如何在具有以下HTML标记的页面中执行render()
// <div id="container">
//   <h1>My App</h1>
// </div>

const container = document.getElementById('container');

render(MyComponent, container);
// 将 MyComponent 添加到 container 中
//
// <div id="container">
//   <h1>My App</h1>
//   <MyComponent />
// </div>

const existingNode = container.querySelector('h1');

render(MyComponent, container, existingNode);
// 对比 MyComponent 和 <h1>My App</h1> 的不同
//
// <div id="container">
//   <MyComponent />
// </div>

class MyForm extends Component {
    toggle(e) {
        let checked = !this.state.checked;
        this.setState({ checked });
    }
    render({ }, { checked }) {
        return (
            <label>
                <input
                    type="checkbox"
                    checked={checked}
                    onClick={::this.toggle} />
            </label>
        );
    }
}
