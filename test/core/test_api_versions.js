'use strict';

const test = require('tape');
const runner = require('../../core/lib/runner').runner;

test('api versions', function(t) {
  var script = require('./scripts/api_versions.json');

  runner(script).then(function(ee) {
    ee.on('done', function(report) {
      t.assert(report.scenariosCreated === 50 , `The created scenarios should be 50, but we get a ${report.scenariosCreated}`);
      t.assert(report.scenariosCreated === report.scenariosCompleted , `The completed scenarios should be ${report.scenariosCreated}, but we get a ${report.scenariosCompleted} completed scenarios`);
      t.assert(report.codes[202] === report.scenariosCompleted , `The API tests should be ${report.scenariosCompleted} under status code 202`);
      t.end();
    });
    ee.run();
  });
});
