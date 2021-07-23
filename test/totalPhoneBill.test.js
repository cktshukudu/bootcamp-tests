describe('The totalPhoneBill function', function(){
    it('should give you your total phone bill if you send 3 smss and make 2 calls', function(){
          assert.equal(totalPhoneBill('call, sms, call, sms, sms'), "R7.45");
    });
    it('should give you your total phone bill if you make 1 call and send 1 sms', function(){
          assert.equal(totalPhoneBill('call, sms'), 'R3.40');

    });
    it('should give you your total phone bill if you call 2 calls', function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
      });
  
    });