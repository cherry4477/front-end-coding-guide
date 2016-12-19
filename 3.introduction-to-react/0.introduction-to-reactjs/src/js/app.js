import $ from 'jquery';
import Hljs from 'highlight.js';
import Impress from 'impress.js';
import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './hello';
import Timer from './timer';
import Todo from './todo';

class App extends React.Component {
  constructor() {
    super();
  }
  
  componentDidMount() {
    impress().init();
    Hljs.initHighlightingOnLoad();
  }
  
  render() {
    return (
      <div id='impress'>
        <div
          className='step slide a'
          data-x='-1000'
          data-y='-1500'
        >
          <h1>ReactJS 概述</h1>
        </div>
        <div
          className='step slide b'
          data-x='0'
          data-y='-1500'
        >
          <h2>三个特点</h2>
          <ul>
            <li>轻松编写，自动渲染</li>
            <li>基于组件，高效使用</li>
            <li>快捷灵活，大显神通</li>
          </ul>
        </div>
        <div
          className='step slide c'
          data-x='1000'
          data-y='-1500'
        >
          <h2>简单组件示例：</h2>
          <pre>
            <code
              className='react'
              dangerouslySetInnerHTML={
                {
                  __html:
`import React from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
    render() {
        return &lt;div&gt;Hello {this.props.name}&lt;/div&gt;;
    }
}

ReactDOM.render(&lt;HelloMessage name='Jane'/&gt;, mountNode);`
                }                
              }
            />
          </pre>
          <div className='demo-result'>
            <Hello name='Jane' />
          </div>
        </div>
        <div
          className='step slide c'
          data-x='2000'
          data-y='-2000'
        >
          <h2>有 State 的组件：</h2>
          <pre>
            <code
              className='react'
              dangerouslySetInnerHTML={
                {
                  __html:
`class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            secondsElapsed: 0
        };
    }

    tick() {
        this.setState((prevState) => ({
            secondsElapsed: prevState.secondsElapsed + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }`
                }                
              }
            />
          </pre>
        </div>
        <div
          className='step slide c'
          data-x='2000'
          data-y='-1000'
        >
          <pre>
            <code
              className='react'
              dangerouslySetInnerHTML={
                {
                  __html:
`   componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            &lt;div&gtSeconds Elapsed: {this.state.secondsElapsed}&lt;/div&gt
        );
    }
}

ReactDOM.render(&lt;Timer /&gt, mountNode);`
                }                
              }
            />
          </pre>
          <div className='demo-result'>
            <Timer />
          </div>
        </div>
        <div
          className='step slide c'
          data-x='3000'
          data-y='-2500'
        >
          <h2>简单应用：</h2>
          <pre>
            <code
              className='react'
              dangerouslySetInnerHTML={
                {
                  __html:
`class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            items: [],
            text: ' '
        };
    }
  
    render() {
        return (
            &lt;div&gt;
                &lt;h3&gt;TODO&lt;/h3&gt;
                &lt;TodoList items={this.state.items} /&gt;
                &lt;form onSubmit={this.handleSubmit}&gt;`
                }                
              }
            />
          </pre>
        </div>
        <div
          className='step slide c'
          data-x='3000'
          data-y='-1500'
        >
          <pre>
            <code
              className='react'
              dangerouslySetInnerHTML={
                {
                  __html:
`                    &lt;input onChange={this.handleChange} value={this.state.text} /&gt;
                    &lt;button&gt{'Add #' + (this.state.items.length + 1)}&lt;/button&gt;
              &lt;/form&gt;
            &lt;/div&gt;
        );
    }
  
    handleChange(e) {
        this.setState({text: e.target.value});
    }
  
    handleSubmit(e) {
        e.preventDefault();
        var newItem = {
            text: this.state.text,
            id: Date.now()
        };`
                }                
              }
            />
          </pre>
        </div>
        <div
          className='step slide c'
          data-x='3000'
          data-y='-500'
        >
          <pre>
            <code
              className='react'
              dangerouslySetInnerHTML={
                {
                  __html:
`        this.setState((prevState) => ({
            items: prevState.items.concat(newItem),
            text: ' '
        }));
    }
}

class TodoList extends React.Component {
    render() {
        return (
            &lt;ul&gt;
                {this.props.items.map(item => (
                    &lt;li key={item.id}&gt;{item.text}&lt;/li&gt;
                ))}
            &lt;/ul&gt;
        );
    }
}

ReactDOM.render(<TodoApp />, mountNode);`
                }                
              }
            />
          </pre>
        </div>
        <div
          className='step slide c'
          data-x='4000'
          data-y='-1500'
        >
          <div className='demo-result'>
            <Todo />
          </div>
        </div>
        <div
          className='step slide c'
          data-x='5000'
          data-y='-1500'
        >
          <h2>React 组件的生命周期</h2>
          <p>React enables to create components by invoking the React.createClass() method which expects a render method and triggers a lifecycle that can be hooked into via a number of so called lifecycle methods.</p>
          <p>Understanding the component lifecycle will enable you to perform certain actions when a component is created or destroyed. Further more it gives you the opportunity to decide if a component should be updated in the first place and to react to props or state changes accordingly.</p>
        </div>
        <div
          className='step slide c'
          data-x='6500'
          data-y='-1500'
          data-rotate='-45'
        >
          <h2>初始化</h2>
          <div className='log bg-primary'>
            <span className='glyphicon glyphicon-ok'></span>
            &nbsp;&nbsp;Initial
          </div>
          <div className='log bg-info'>
            <span className='glyphicon glyphicon-ok'></span>
            &nbsp;&nbsp;GetDefaultProps
          </div>
          <div className='log bg-info'>
            <span className='glyphicon glyphicon-ok'></span>
            &nbsp;&nbsp;GetInitialState
          </div>
          <div className='log bg-warning'>
            <span className='glyphicon glyphicon-ok'></span>
            &nbsp;&nbsp;ComponentWillMount
          </div>
          <div className='log bg-success'>
            <span className='glyphicon glyphicon-ok'></span>
            &nbsp;&nbsp;Render
          </div>
          <div className='log bg-warning'>
            <span className='glyphicon glyphicon-ok'></span>
            &nbsp;&nbsp;ComponentDidMount
          </div>
        </div>
        <div
          className='step slide c'
          data-x='6500'
          data-y='-500'
          data-rotate='-45'
        >
          <h2>State 发生变化</h2>
          <div className='log bg-primary'>
            <span className='glyphicon glyphicon-ok'></span>
            &nbsp;&nbsp;Updating State
          </div>
          <div className='log bg-info'>
            <span className='glyphicon glyphicon-ok'></span>
            &nbsp;&nbsp;ShouldComponentUpdate
          </div>
          <div className='log bg-warning'>
            <span className='glyphicon glyphicon-ok'></span>
            &nbsp;&nbsp;ComponentWillUpdate
          </div>
          <div className='log bg-success'>
            <span className='glyphicon glyphicon-ok'></span>
            &nbsp;&nbsp;Render
          </div>
          <div className='log bg-warning'>
            <span className='glyphicon glyphicon-ok'></span>
            &nbsp;&nbsp;ComponentDidUpdate
          </div>
        </div>
        <div
          className='step slide c'
          data-x='7500'
          data-y='-1500'
          data-rotate='-45'
        >
          <h2>Props 发生变化</h2>
          <div className='log bg-primary'>
            <span className='glyphicon glyphicon-ok'></span>
            &nbsp;&nbsp;Updating Props
          </div>
          <div className='log bg-warning'>
            <span className='glyphicon glyphicon-ok'></span>
            &nbsp;&nbsp;ComponentWillRecieveProps
          </div>
          <div className='log bg-info'>
            <span className='glyphicon glyphicon-ok'></span>
            &nbsp;&nbsp;ShouldComponentUpdate
          </div>
          <div className='log bg-warning'>
            <span className='glyphicon glyphicon-ok'></span>
            &nbsp;&nbsp;ComponentWillUpdate
          </div>
          <div className='log bg-success'>
            <span className='glyphicon glyphicon-ok'></span>
            &nbsp;&nbsp;Render
          </div>
          <div className='log bg-warning'>
            <span className='glyphicon glyphicon-ok'></span>
            &nbsp;&nbsp;ComponentDidUpdate
          </div>
        </div>
        <div
          className='step slide c'
          data-x='7500'
          data-y='-500'
          data-rotate='-45'
        >
          <h2>卸载</h2>
          <div className='log bg-primary'>
            <span className='glyphicon glyphicon-ok'></span>
            &nbsp;&nbsp;Unmounting
          </div>
          <div className='log bg-danger'>
            <span className='glyphicon glyphicon-ok'></span>
            &nbsp;&nbsp;ComponentWillUnmount
          </div>
        </div>
        <div
          className='step'
          data-x='7000'
          data-y='-1250'
          data-rotate='-45'
          data-scale='2'
        />
        <div
          className='step slide a'
          data-x='3250'
          data-y='-500'
          data-z='2000'
          data-rotate='-360'
          data-scale='8'
          style={
            {
              backgroundColor: 'rgba(255, 255, 255, 0.2)'
            }
          }
        >
          <h1>谢谢大家</h1>
        </div>
      </div>
    );
  }
};

$(document).ready(() => {
  ReactDOM.render(<App/>, $('#index_node')[0]);
});