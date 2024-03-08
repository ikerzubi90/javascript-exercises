const reverseString = function(word) {
    let string="";
    for (let i=0;i<=word.length;i++){
        string+=word.charAt(word.length-i);
    }
    return string;
};

// Do not edit below this line
module.exports = reverseString;
