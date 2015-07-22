# Compare.js

`Array.prototype.sort` accepts an arbitrary comparator, giving you tremendous power (in theory). In practice you probably just want to:

1. Sort on a property (e.g. sort on name)
2. Sort with a special order (e.g. numerical order (1 < 2 < 10) instead of lexicographical order (1 < 10 < 2))
2. Sort with a certain direction (e.g. ascending, descending)
3. Sort on multiple properties (e.g. first sort on age, then on balance)
4. Arbitrary combinations of aforementioned (e.g. first sort ascending on age, then sort descending on date)

Implementing these use cases as a comparator is a non-trivial task. This small library provides an easy-to-use API for constructing a comparator that can be used by `Array.prototype.sort`.