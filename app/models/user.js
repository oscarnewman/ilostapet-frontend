import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  email: attr(),
  name: attr(),

  created_at: attr('date'),
  updated_at: attr('date'),

  pets: hasMany('pet')
});
