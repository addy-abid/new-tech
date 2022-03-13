/* global expect, makeArrayConsecutive, deepFreeze */
describe('makeConsecutive(array)', function () {

  beforeEach(function () {
    expect(makeArrayConsecutive).to.be.a('function');

  });

  context('[6, 2, 3, 8]', function () {

    it('returns 3', function () {
      var input = deepFreeze([6, 2, 3, 8]);
      var output = makeArrayConsecutive(input);
      expect(output).to.deep.equal(3);
    });

  });

  context('[0, 3]', function () {

    it('returns 2', function () {
      var input = deepFreeze([0, 3]);
      var output = makeArrayConsecutive(input);
      expect(output).to.deep.equal(2);
    });

  });

  context('[5, 4, 6]', function () {

    it('returns 0', function () {
      var input = deepFreeze([5, 4, 6]);
      var output = makeArrayConsecutive(input);
      expect(output).to.deep.equal(0);
    });

  });

  context('[6, 3]', function () {

    it('returns 2', function () {
      var input = deepFreeze([6, 3]);
      var output = makeArrayConsecutive(input);
      expect(output).to.deep.equal(2);
    });

  });

  context('[1]', function () {

    it('returns 0', function () {
      var input = deepFreeze([1]);
      var output = makeArrayConsecutive(input);
      expect(output).to.deep.equal(0);
    });

  });

});
