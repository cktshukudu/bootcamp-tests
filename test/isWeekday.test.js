describe('The isWeekday function', function(){
    it('should check if the isWeekday', function(){
          assert.equal(isWeekday('Monday'), true);
      });
      it('should check if the isWeekday', function(){
          assert.equal(isWeekday('Saturday'), false);
      });
  });