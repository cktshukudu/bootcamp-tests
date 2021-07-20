describe('The countRegNumber function', function(){
    it('should count registration Numbers', function(){
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });
    it('should check if isFromCapeTown', function(){
        assert.equal(1, countRegNumber('CA 182736'));
    });
});
