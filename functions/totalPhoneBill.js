function totalPhoneBill(call,sms){
    var tcost = call.split(',');
var count = 0;

for(var i = 0;i < tcost.length;i++){
    var cs = tcost[i].trim();
        if(cs.startsWith('call')){
            count +=2.75;
}
else if(cs.startsWith('sms')){
count +=0.65;
}
}
return 'R'+ count.toFixed(2);
}