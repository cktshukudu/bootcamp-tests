describe('The totalPhoneBill function', function(){
    it('should count totalPhoneBill', function(){
          assert.equal(totalPhoneBill('call, sms, call, sms, sms'), "R7.45");
          assert.equal(totalPhoneBill('sms, sms, sms'), 'R1.95');
          assert.equal(totalPhoneBill('call, call'), 'R5.50');
  
      });
      it('should count totalPhoneBill', function(){
          assert.equal(totalPhoneBill(''), 'R0.00');
      });
  });
  