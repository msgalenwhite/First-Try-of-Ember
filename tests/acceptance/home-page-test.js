import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers'; // import only the test-helpers that you will need 
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | / ', function(hooks) { // this is testing the home page - "/" can be replaced with whatever path you are using to test, preceeded by a "/" - example: "/list-rentals"
  setupApplicationTest(hooks); // this makes sure that the ember app is started and shut down between each test

  test('visiting /', async function(assert) {
    await visit('/');  // async and await are being used to make sure that the status of the app is synchronous and stable before tying to run assertions - if you make an asyncronous request, it is helpful to wait for it to complete before trying to test it

    assert.equal(currentURL(), '/'); // a test must have a passing 'assert' to be successful
  });
});

// 'visit' and 'currentURL()' are helper functions