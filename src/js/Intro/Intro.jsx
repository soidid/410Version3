/** @jsx React.DOM */

var React = require('react/addons');
require('./Intro.css');

var Intro = React.createClass({
  render () {
    return (
      <div className="Intro">
          本表整理民團各訴求之審議進度，若有一個以上提案與其訴求相關，將顯示「最接近三讀」之版本審議進度，並於下方說明各版本審議進度。
      </div>
    );
  }
});

module.exports = Intro;


