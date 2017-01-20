import Ember from 'ember';
import RESTSerializer from 'ember-data/serializers/rest';

export default RESTSerializer.extend({
  // primaryKey: 'id',

  keyForAttribute(key) {
    return Ember.String.decamelize(key);
  }
});
