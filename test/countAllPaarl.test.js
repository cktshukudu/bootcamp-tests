describe('The countAllPaarl function', function(){
    it('should count how many from paarl', function(){
          assert.equal(countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'), 3);
      });
      it('should count how many from paarl', function(){
          assert.equal(countAllPaarl('CJ 345 123, CK 345, CJ 123'), 2);
      });
  });
  