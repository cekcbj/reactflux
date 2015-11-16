"use strict";

var React = require('react');
var TrainerApi = require('../../api/trainerApi');
var TrainerList = require('./trainerList');

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
        <TrainerList trainers={this.state.trainers} />
      </div>
    );
  }
});

module.exports = Trainers;
