"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1> Trainer Administration</h1>
        <p> react,react router, and flux</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
});

module.exports = Home;
