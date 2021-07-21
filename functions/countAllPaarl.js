function countAllPaarl(regNo){
    var num = regNo.split(',');
    var count = 0;
    
    for(var i = 0; i < num.length;i++){
    var countAll = num[i].trim();
    
    if(countAll.startsWith('CJ')){
        count++;
            }
    }
      return count;
    }
    