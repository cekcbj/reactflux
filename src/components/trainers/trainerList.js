"use strict";

var React = require('react');

var TrainerList = React.createClass({


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
        <table className="table">
          <thead>
            <th>ID</th>
            <th>Name</th>
         </thead>
         <tbody>
           {this.props.trainers.map(createTrainerRow, this)}
         </tbody>
       </table>
      </div>
    );
  }
});

module.exports = TrainerList;
