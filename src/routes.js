"use strict";

var React = require('react');

var Router = require('react-router');

var DefaultRoute= Router.DefaultRoute;

var Route = Router.route;

var routes = (
  <Route name="app" path='/' handler={require('./components/app')}>
    <DefaultRoute handler={require('./components/homePage')}/>
    <Route name = "trainers" handler={require('./components/trainers/trainerPage')} />
    <Route name = "about" handler={require('./components/about/aboutPage')} />
    </Route>
);

module.exports = routes;
