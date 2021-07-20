describe('The regCheck function', function(){
    it('should check regNumber', function(){
        assert.equal(true, regCheck('DC 55 YU GP', 'GP'));
    });
    it('should check regNumber', function(){
        assert.equal(false, regCheck('DC 55 YU GP', 'EC'));
    });
    it('should check regNumber', function(){
        assert.equal(true, regCheck('5566 L', 'L'));
    });
    it('should check regNumber', function(){
        assert.equal(false, regCheck('5566 L', 'M'));
    });
});