/** @jsx React.DOM */

require('./normalize.css');
require('./main.css');

var React = require('react');
var App = require('./App/App.jsx');

React.renderComponent((
  <App />
), document.body);
