import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('travel', function() {
    this.route('points');
    this.route('options');
    this.route('rate');
  });
  this.route('thankyou');
});

export default Router;
