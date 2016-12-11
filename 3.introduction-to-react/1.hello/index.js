import React from 'react';
/*
 * We have to import react-dom library if we want to render the virtual DOM to the real DOM.
 * 如果我们想要把虚拟 DOM 渲染成真实的 DOM，我们必须要引入 react-dom 库。
 */
import ReactDOM from 'react-dom';

/*
 * Import a react component from somewhere
 * 从某个地方引入 react 组件
 */
import App from './components/Hello';

/*
 * ReactDOM's method render accept two parameters - the first is a react component (or JSX content),
 * and the secomd is a DOM element, which will be the first component's mounting node.
 * ReactDOM 的 render 方法接收两个参数：第一个参数是 react 组件（或者说是 JSX 内容），第二个参数是一个 DOM 元素，这个元素将会成为第一个参数内容的挂载点。
 */
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
