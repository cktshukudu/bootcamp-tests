describe('The countAllFromTown function', function(){
    it('should count how many from a specific town', function(){
          assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), 3);
      });
      it('should count how many from a specific town', function(){
          assert.equal(countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF'), 1);
      });
  });
  