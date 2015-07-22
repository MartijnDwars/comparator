function Compare(f) {
	this.f = f || function (a, b) {
		return 0;
	};
};

Compare.prototype.get = function () {
	return this.f;
};

/**
 * Sort ascending on given property
 */
Compare.prototype.on = function (field) {
	var that = this;

	return new Compare(function (a, b) {
		return that.f(a, b) || a[field].localeCompare(b[field]);
	});
};

/**
 * Sort decending
 */
Compare.prototype.desc = function () {
	var that = this;

	return new Compare(function (a, b) {
		return -that.f(a, b);
	});
};

// Usage

// Name desc email desc loses the desc on name. Make a test case out of this!
var comparator = new Compare()
	.on('name').desc()
	.on('email').desc()
;

var records = [{
	"name": "Forrest Odom",
	"phone": "(01477) 97912",
	"email": "welit@rutrumFuscedolor.edu"
}, {
	"name": "Forrest Odom",
	"phone": "(01477) 97912",
	"email": "velit@rutrumFuscedolor.edu"
}, {
	"name": "Len Grimes",
	"phone": "07624 436318",
	"email": "euismod.ac.fermentum@Morbi.co.uk"
}, {
	"name": "Chancellor Pace",
	"phone": "0800 702002",
	"email": "metus.facilisis@orci.ca"
}, {
	"name": "Zephania Sheppard",
	"phone": "056 0601 5206",
	"email": "viverra.Maecenas.iaculis@facilisis.co.uk"
}, {
	"name": "Dalton Flynn",
	"phone": "056 6909 9367",
	"email": "Integer.mollis@Donecporttitor.com"
}];

var sorted = records.sort(comparator.get());

console.log(sorted);

module.exports = Compare;