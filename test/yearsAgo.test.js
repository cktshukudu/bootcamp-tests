describe('The yearsAgo function', function(){
    it('should check how many years ago it was from the current year',function(){
      assert.equal(yearsAgo(1976),45);
      assert.equal(yearsAgo(2002), 19);
    });
  })