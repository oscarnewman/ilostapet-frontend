import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  animal: attr(),
  gender: attr(),
  name: attr(),
  breed: attr(),
  description: attr(),
  has_collar: attr(),
  has_tags: attr(),
  has_microchip: attr(),

  created_at: attr('date'),
  updated_at: attr('date'),

  user: belongsTo('user'),
  posts: hasMany('post'),
  images: hasMany('image')
});
