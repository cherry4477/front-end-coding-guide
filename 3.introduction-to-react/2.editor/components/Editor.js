import React from 'react';
import Marked from 'marked';


class Editor extends React.Component {
  /*
   * Constructor function
   * 构造函数
   */
  constructor() {
    super();

    /*
     * Defination react's initial state in constructor
     * 在构造函数中定义 react 的初始状态（state）
     */
    
    this.state = {
      value: 'Type some *markdown* here!'
    };

    this.handleChange = this.handleChange.bind(this);
  }
  
  /*
   * Write your own method inside react class.
   * 在 react 类中添加你的自定义方法。
   */
  
  handleChange() {
    /*
     * You have to use the "setState" method if you want to update react class's state(s), or react wouldn't now the state is updated.
     * 如果你想要更新一个或多个 react 类的状态（state），你必须使用 "setState" 方法，否则，react 不会知道你更新了状态。
     *
     * One thing you should know, is that "setState" method is asynchronous, just like AJAX.
     * 必须告诉你的是，"setState" 方法是异步执行的，就和 AJAx 一样。
     */

    this.setState({ value: this.refs.textarea.value });
  }

  getRawMarkup() {
    return {
      __html: Marked(this.state.value)
    };
  }

  render() {
    return (
      <div className='editor'>
        <h3>Input</h3>
        <textarea
          onChange={ this.handleChange }
          ref='textarea'
          defaultValue={ this.state.value }
        />
        <h3>Output</h3>
        <div
          className='content'
          dangerouslySetInnerHTML={ this.getRawMarkup() }
        />
      </div>
    );
  }
}

export default Editor;
