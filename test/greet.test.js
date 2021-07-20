describe('The greet function', function(){

    it('should greet Christian', function(){
        assert.equal('Hello, Christian', greet('Christian'));
    });
    it('should greet Jack', function(){
      
        assert.equal('Hello, Jack', greet('Jack'));
    });
});