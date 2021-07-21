function transportFee(price){
    if(price.startsWith('m')){
      return 'R20';
    }else if(price.startsWith('a')){
      return 'R10';
    }else if(price.startsWith('n')){
      return 'free';
    }}
      
      