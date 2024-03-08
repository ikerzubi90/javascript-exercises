const repeatString = function(word,nTimes){
    let string="";
    if(nTimes<0){
        return "ERROR"
    }
    for(i=0;i<nTimes;i++){
        string+=word;
    }
    return string
};

// Do not edit below this line
module.exports = repeatString;
