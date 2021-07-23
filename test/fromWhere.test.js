describe('The fromWhere function', function(){
    it('should check If the reg number starts with CY return Bellville', function(){
          assert.equal('Bellville', fromWhere('CY', 'Bellville'));
      });
      it('should check If the reg number starts with CJ return Paarl', function(){
          assert.equal('Paarl', fromWhere('CJ', 'Paarl'));
      });
      it('should check If the reg number starts with CA return Cape Town', function(){
        assert.equal('Cape Town', fromWhere('CA', 'Cape Town'));
    });
    it('should check If the reg number starts with CC return Some other place!', function(){
        assert.equal('Some other place!', fromWhere('CC', 'Some other place!'));
    });
  });
  