import React from 'react';

/*
 * CSS Modules (https://github.com/css-modules/css-modules), you can use styles in the js scripts through it,
 * this can make components more easily to write, and avoid styles' name collsion.
 * 模块化 CSS（https://github.com/css-modules/css-modules），通过它你可以在 js 中使用样式，
 * 它使得编写组件更加容易，同时能避免样式上的命名冲突。
 */

import CSSModules from 'react-css-modules';
//import styles from '../style.css';
import styles from '../style.scss';


const A = () => (
  <div styleName='example'>
    React CSS Modules Demo
  </div>
);

export default CSSModules(A, styles);
