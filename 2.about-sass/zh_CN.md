# 关于 SASS

在使用 CSS 书写样式布局的过程中，我们经常会感到些许不方便的地方：比如不能使用变量保存常用数值、不能使用循环、有时候需要写出很长很长的选择器名称（当然这种情况要极力避免）等等等等。于是，就有了 [SASS (Syntatically Awesome Style Sheets)](http://sass-lang.com)。

SASS 有两种语法格式，一种是早期的 sass 格式，以及近几年的 scss 格式：sass 语法又称为“缩进语法”，与 [Haml](http://haml.info) 类似，使用缩进来区分代码块，并且用回车将不同规则分隔开；而 scss 语法使用和 CSS 一样的块语法，即使用大括号将不同的规则分开，使用分号将具体的样式分开（也就是说 scss 语法是兼容 css 的语法的）。

我们的项目中使用了 scss 的语法，关于 scss 的学习以及代码规范，请阅读 [Airbnb CSS / Sass 指南](https://github.com/Zhangjd/css-style-guide#sass)。
