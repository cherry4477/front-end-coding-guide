import React from 'react';

/*
 * You can also write the following code this way:
 * 下面的代码你也可以这么写：
 *
 * export default class extends React.Component {
 *   render() {
 *     return (
 *       <div>Hello, world!</div>
 *     );
 *   }
 * }
 *
 */

const Hello = () => (
  <div>Hello, world!</div>
);

export default Hello;

/*
 * Anyway, a React class must have a render method that rentun some JSX (you can treat them as XML) content, but DOM content is NOT necessary to be returned.
 * 也就是说，一个 React 类必须有一个名为 render 的方法，这个方法返回了一些 JSX（你可以把它当做 XML）的内容，但你不一定要返回 DOM 内容。
 */