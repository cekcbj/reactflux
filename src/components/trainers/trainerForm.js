'use strict';

var React = require('react');

var TrainerForm = React.createClass({
  render:function() {
    return(
       <form>
         <h1>Manage Trainer</h1>
         <label htmlFor="firstName">First Name</label>
         <input type="text"
           name="firstName"
           className="form-control"
           ref="firstName"
           onChange={this.props.onChange}
           value={this.props.trainer.firstName}/>
         <br />

         <label htmlFor="lastName">Last Name</label>
         <input type="text"
           name="lastName"
           className="form-control"
           ref="lastName"
           onChange={this.props.onChange}
           value={this.props.trainer.lastName}/>
         <br />

         <input type="submit" value="Save" className="btn btn-default" />
      </form>
    );
  }
});

module.exports = TrainerForm;
