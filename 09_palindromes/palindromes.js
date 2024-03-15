const palindromes = function (string) {
    string=cleanString(string);
    for (i=0;i<string.length;i++){
        //console.log(`Comparing ${newString[i]} against ${newString[newString.length-(i+1)]}`)
        if ((string[i] !== string[string.length-(i+1)]) && (i<=string.length-(i+1))){
            return false;
        }
    }
    return true;
};

function cleanString(string){
    let newString="";
    let punctuation = 
    Array.from(string).forEach(element => {
        if(element ===" "){
            
        }else{
            newString+=element;
        }
    });
    newString=newString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    return newString.toLowerCase();
}

// Do not edit below this line
module.exports = palindromes;
