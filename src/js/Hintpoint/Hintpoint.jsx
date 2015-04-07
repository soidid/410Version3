/** @jsx React.DOM */

var React = require('react/addons');
require('./Hintpoint.css');

var Hintpoint = React.createClass({
  //<div className="Hintpoint-info">點選訴求，查看更多資訊</div>
  render () {
    return (
      <div className="Hintpoint">
          <div className="Hintpoint-hinter"></div>
          
      </div>
    );
  }
});

module.exports = Hintpoint;


