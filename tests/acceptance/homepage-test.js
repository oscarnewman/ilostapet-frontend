import { test } from 'qunit';
import moduleForAcceptance from 'ilap/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | homepage');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('should display a list of recent posts.', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(find('.post').length, 12, 'should see 12 posts');
  });
});

test('should display a "see more" button.', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(find('a:contains("See More")').length, 1, "see more button exists.");
  });
});
