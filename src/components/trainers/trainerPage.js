"use strict";

var React = require('react');
var TrainerApi = require('../../api/trainerApi');

var Trainers = React.createClass({
  getInitialState: function() {
    return {
      trainers: []
    };
  },
  componentWillMount: function() {
    this.setState({ trainers: TrainerApi.getAllTrainers() });
  },


  render: function() {
    var createTrainerRow = function(trainer) {
      return (
        <tr key={trainer.id}>
          <td><a href={"/trainers/" + trainer.id}>{trainer.id}</a></td>
          <td>{trainer.firstName} {trainer.lastName}</td>
        </tr>
      );
    };

    return (
      <div>
        <h1> Trainers</h1>

        <table className="table">
          <thead>
            <th>ID</th>
            <th>Name</th>
         </thead>
         <tbody>
           {this.state.trainers.map(createTrainerRow, this)}
         </tbody>
       </table>
      </div>
    );
  }
});

module.exports = Trainers;
