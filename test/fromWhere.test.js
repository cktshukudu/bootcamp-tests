describe('The fromWhere function', function(){
    it('should check the location of the registration number', function(){
          assert.equal('Bellville', fromWhere('CY', 'Bellville'));
      });
      it('should check the location of the registration number', function(){
          assert.equal('Paarl', fromWhere('CJ', 'Paarl'));
      });
      it('should check the location of the registration number', function(){
        assert.equal('Cape Town', fromWhere('CA', 'Cape Town'));
    });
    it('should check the location of the registration number', function(){
        assert.equal('Some other place!', fromWhere('CC', 'Some other place!'));
    });
  });
  