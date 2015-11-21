'use strict';

var React = require('react');
var TrainerForm = require('./trainerForm');

var ManageTrainerPage = React.createClass({
  getInitialState: function() {
    return{
      trainer: {id: '', firstName: '', lastName:''}
    };
  },

  setTrainerState: function(event) {
    var field = event.target.name;
    var value = event.target.value;
    this.state.trainer[field] = value;
    return this.setState({trainer:this.state.trainer});
  },

  render:function() {
    return(
       <TrainerForm
       trainer={this.state.trainer}
       onChange={this.setTrainerState}/>
    );
  }
});

module.exports = ManageTrainerPage;
