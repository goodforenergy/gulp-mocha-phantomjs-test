'use strict';

describe('a test', function() {

	describe('a thing', function() {

		it('should have a test', function() {
			(5).should.be.exactly(5);
		});

		it('should have another test', function() {
			(2).should.be.exactly(2);
		});
	});
});
