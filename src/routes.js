"use strict";

var React = require('react');

var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;

var Route = Router.Route;

var NotFoundRoute = Router.NotFoundRoute;

var Redirect = Router.Redirect;

var routes = (
  <Route name="app" path='/' handler={require('./components/app')}>
    <DefaultRoute handler={require('./components/homePage')}/>
    <Route name = "trainers" handler={require('./components/trainers/trainerPage')} />
    <Route name = "about" handler={require('./components/about/aboutPage')} />
    <Route name = "addTrainer" path="trainer" handler={require('./components/trainers/manageTrainerPage')} />
    <NotFoundRoute handler={require('./components/errorPage')} />
    <Redirect from="about-us" to="about" />
    <Redirect from="traynurs" to="trainers" />
    <Redirect from="about/*" to="about" />
    </Route>
);

module.exports = routes;
