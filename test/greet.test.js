describe('The greet function', function(){

    it('should greet Someone, returns greeting message and name', function(){
        assert.equal('Hello, Christian', greet('Christian'));
    });
    it('should greet Someone, returns greeting message and name', function(){
      
        assert.equal('Hello, Jack', greet('Jack'));
    });
});