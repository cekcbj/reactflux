"use strict";

var React = require('react');
var Router = require('react-router')
var TrainerApi = require('../../api/trainerApi');
var TrainerList = require('./trainerList');
var Link = Router.Link;

var Trainers = React.createClass({
  getInitialState: function() {
    return {
      trainers: []
    };
  },
  componentDidMount: function() {
    if (this.isMounted()){
      this.setState({ trainers: TrainerApi.getAllTrainers() });
    }
  },


  render: function() {
    return (
      <div>
        <h1> Trainers</h1>
        <Link to="addTrainer" className="btn btn-default">Add Trainer</Link>
        <TrainerList trainers={this.state.trainers} />
      </div>
    );
  }
});

module.exports = Trainers;
