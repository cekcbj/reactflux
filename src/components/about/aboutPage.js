"use strict";

var React = require('react');

var About = React.createClass({
  statics: {
    willTransitionTo: function(transition,params,query,callback) {
      if(!confirm("Are you sure you want to read a page thats this boring?")) {
        transition.about();
      } else {
        callback();
      }
    },

    willTransitionFrom: function(transition,component) {
      if(!confirm("Are you sure you want to leave a page thats this exciting?")) {
        transition.about();

      }
    }
  },



  render: function() {
    return (
      <div>
        <h1> About </h1>
        <p>
          This app uses react, flux and react react-router
          </p>
      </div>
    );
  }
});

module.exports = About;
