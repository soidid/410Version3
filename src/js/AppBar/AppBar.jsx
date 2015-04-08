/** @jsx React.DOM */
var React = require('react/addons');
require('./AppBar.css');

var AppBar = React.createClass({

  getInitialState(){
    return {
      
    }
  },
  
  render () {
    var { data } = this.props;
    
    return (
      <div className="AppBar">
          我的訴求
          ・我關注
      </div>
    );
  }
});

module.exports = AppBar;
