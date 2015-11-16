$ = jQuery = require('jquery');

var React = require('react');

var Home = require('./components/homepage');
var Trainers = require('./components/trainers/trainerPage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');
var App = React.createClass({
  render: function() {
    var Child;

    switch(this.props.route) {
      case 'about': Child = About; break;
      case 'trainers': Child = Trainers; break;
      default : Child = Home;
    }

    return (
      <div>
        <Header/>
        <Child/>
      </div>
    );

  }
});

function render () {
  var route = window.location.hash.substr(1);
  React.render(<App route={route}/>, document.getElementById('app'));
}

window.addEventListener('hashchange', render);
render();
