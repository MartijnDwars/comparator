var assert = require('assert');
var Compare = require('../compare');
var R = require('ramda');

var records = [{
	"name": "A",
	"phone": "D",
	"email": "welit@rutrumFuscedolor.edu"
}, {
	"name": "C",
	"phone": "B",
	"email": "euismod.ac.fermentum@Morbi.co.uk"
}, {
	"name": "B",
	"phone": "C",
	"email": "velit@rutrumFuscedolor.edu"
}, {
	"name": "A",
	"phone": "A",
	"email": "velit@rutrumFuscedolor.edu"
}];

describe('Comparator', function() {
  describe('#on()', function () {
    it('should sort ascending on single field', function () {
      var comparator = new Compare()
        .on('name');

      var sorted = records.sort(comparator.get());

      assert.deepEqual(['A', 'A', 'B', 'C'], R.map(R.prop('name'), sorted));
    });

    it('should sort ascending on two fields', function () {
      var comparator = new Compare()
        .on('name')
        .on('phone');

      var sorted = records.sort(comparator.get());

      assert.deepEqual(['A', 'B', 'C', 'D'], R.map(R.prop('phone'), sorted));
    });
  });

  describe('#desc()', function () {
    it('should sort descending on single field', function () {
      var comparator = new Compare()
        .on('name').desc();

      var sorted = records.sort(comparator.get());

      assert.deepEqual(['C', 'B', 'A', 'A'], R.map(R.prop('name'), sorted));
    });
  });
});
