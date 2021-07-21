function findItemsOver20(list){
    var newList=[];
      for(var i=0;i<list.length;i++){
        if(list[i].qty>20){
          newList.push(list[i]);
      }
    }
    return newList;
    }
   