import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  type: attr(),

  address: attr(),
  lat: attr('number'),
  lng: attr('number'),

  title: Ember.computed('type', 'pet.breed', 'pet.animal', function () {
    return `${this.get('firstName')} ${this.get('pet').get('breed')}`
  }),

  createdAt: attr('date'),
  updatedAt: attr('date'),

  pet: belongsTo('pet'),
  contact: hasMany('contact')
});
