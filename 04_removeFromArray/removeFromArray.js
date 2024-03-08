const removeFromArray = function(array,...arg) {
    for(let j=0;j<arg.length;j++){
        for (let i=0;i<array.length;){
            if(arg[j]===array[i]){
                array.splice(i,1);
            }
            else{
                i++;
            }
        }
    }
    return array;
    };
// Do not edit below this line
module.exports = removeFromArray;
