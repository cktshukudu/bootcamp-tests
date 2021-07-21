describe('The isFromBellville function', function(){

    it('should check if isFromBellville', function(){
        assert.equal(true, isFromBellville('CY 123'));
    });
    it('should check if isFromCapetown', function(){
        assert.equal(false, isFromBellville('CA 123'));
    });
});
