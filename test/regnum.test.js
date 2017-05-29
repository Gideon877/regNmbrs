describe('countAllFromTown function', function() {

    it('returns all the registration numbers in the string from Bellville', function() {
        assert.deepEqual(checkTown("CY 900"), 'Bellville');
    });

    it('returns all the registration numbers in the string from Cape Town', function() {
        assert.deepEqual(checkTown("CA 900"), 'Cape Town');
    });

    it('returns all the registration numbers in the string from Paarl', function() {
        assert.deepEqual(checkTown("CJ 900"), 'Paarl');
    });
});
