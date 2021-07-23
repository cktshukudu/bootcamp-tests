describe('The transportFee function', function(){
    it('should check if you are working morning shift and return the transportFee', function(){
          assert.equal(transportFee('morning'), "R20");
    });
          it('should check if you are working afternoon shift and return the transportFee', function(){
          assert.equal(transportFee('afternoon'), 'R10');
          });
          it('should check if you are working night shift and pay nothing', function(){
          assert.equal(transportFee('nightshift'), 'free');
      
    
});
  });
  