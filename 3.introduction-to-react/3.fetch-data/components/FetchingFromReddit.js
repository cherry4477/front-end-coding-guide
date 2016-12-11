import React from 'react';

/*
 * Here we use the new fetch library instead of the AJAX method. See https://github.com/github/fetch
 * 这里我们使用了新的 fetch 库，以替代 AJAX。详情参考：https://github.com/github/fetch
 */

import 'whatwg-fetch';


export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      list: []
    };    
  }

  /*
   * "componentDidMount" is one of react own method, it will execute once after the react component mount.
   * "componentDidMount" 是 React 自身提供的方法之一，它会在这个组件挂载完成后执行一次。
   *
   * There still some others react own methods, such as: componentWillMount, componentWillReceiveProps, shouldComponentUpdate, ...
   * Recommandly you reading this article: http://busypeoples.github.io/post/react-component-lifecycle/ (its's wrinting is ES5, but it's fine)
   * react 还有许多其他的方法，比如：componentWillMount, componentWillReceiveProps, shouldComponentUpdate, ...
   * 推荐阅读这篇文章：http://busypeoples.github.io/post/react-component-lifecycle/ （尽管文章里的代码是用 ES5 写的，不过没关系）
   */
  
  componentDidMount() {
    fetch('//api.reddit.com/hot')
      .then(
        response => response.json()
      )
      .then(
        json => this.setState({
          list: json.data.children
        })
      )
      .catch(
        err => console.log(err)
      );
  }

  render() {
    return (
      <ul>
        {
          this.state.list.map((child, i) => (
            <li
              key={ i }
            >
              { child.data.title }
            </li>
          ))
        }
      </ul>
    );
  }
}