import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  imageUrl: attr(),
  storagePath: attr(),
  width: attr('number'),
  height: attr('number'),

  createdAt: attr('date'),
  updatedAt: attr('date'),

  pet: belongsTo('pet')
});
