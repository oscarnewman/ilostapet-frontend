import RESTAdapter from 'ember-data/adapters/rest';

export default RESTAdapter.extend({
  host: 'http://api.ilap.local',

  // session: Ember.inject.service('session'),
  // headers: Ember.computed('session.authToken', function() {
  //   return {
  //     'Authorization': 'Bearer ' + this.get('session.authToken'),
  //   };
  // })
});
