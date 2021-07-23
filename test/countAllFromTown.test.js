describe('The countAllFromTown function', function(){
    it('should take a string parameter with registration numbers separated with commas and the registration number start string and It should return number registration numbers in the string that is for that town.', function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        assert.equal(fromStellies, 3)
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
        assert.equal(fromKuilsriver, 1)
      });
  });
  