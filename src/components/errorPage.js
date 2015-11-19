'use strict';

var React  = require('react')
var Router = require('react-router');

var Link = Router.Link;


var NotFoundPage = React.createClass({
  render: function() {
    return (
      <div>
        <h3> sorry this page not found</h3>
        <p> whoops nothing to see here</p>
      </div>
    );
  }
});


module.exports = NotFoundPage;
