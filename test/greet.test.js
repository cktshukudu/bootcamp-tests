describe('The greet function', function(){

    it('should greet Christian', function(){
        assert.equal('Hello, Christian', greet('Christian'));
    });
    it('should greet Jack', function(){
        // this test will fail
        assert.equal('Hello, Jack', greet('Jack'));
    });
});