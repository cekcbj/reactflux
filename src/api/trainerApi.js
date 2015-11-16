"use strict"

var trainers = require('./trainerData').trainers;

var _ =require('lodash');

var _generateId = function(author) {
  return trainer.firstName.toLowerCase() + "-" + trainer.lastName.toLowerCase();
}

var _clone = function(item) {
  return JSON.parse(JSON.stringify(item)); //return cloned copy
};

var TrainerApi = {
  getAllTrainers: function() {
    return _clone(trainers);
  },

  getTrainerById: function(id) {
    var trainer = _.find(trainers,{id: id});
    return _clone(trainer);
  },

  saveTrainer: function(trainer) {
    console.log('pretend this just saved the author to the db via ajax call');

    if(trainer.id) {

      var existingTrainerIndex = _indexOf(trainers, _.find(trainers, {id: trainer.id}));
      trainers.splice(existingTrainerIndex, 1, trainer);
    } else  {

      trainer.id = _generateId(trainer);
      trainers.push(trainer);
    }
    return _clone(trainer);
  },

  deleteTrainer: function(id) {
    console.log('pretend this deleted trainer from databas');
    _.remove(trainers, {id: id});
  }
};

module.exports = TrainerApi;
