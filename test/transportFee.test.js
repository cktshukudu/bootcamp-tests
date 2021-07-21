describe('The transportFee function', function(){
    it('should check which shift and return the transportFee', function(){
          assert.equal(transportFee('morning'), "R20");
          assert.equal(transportFee('afternoon'), 'R10');
          assert.equal(transportFee('nightshift'), 'free');
      });
     
  });
  