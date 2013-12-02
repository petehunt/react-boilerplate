/** @jsx React.DOM */
var React = require('react-core');

React.renderComponentToString(<span />, function(s) {
  console.log(s);
});