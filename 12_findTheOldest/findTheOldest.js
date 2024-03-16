
function findTheOldest(people){

    const birthOrded = people.sort((a,b) => (a.yearOfBirth)>(b.yearOfBirth) ? 1 : -1);

    if(birthOrded[0].yearOfDeath===undefined){
        return birthOrded[0];
    }
    const filtered = people.filter(death => death.yearOfDeath!==undefined);
    
    const ageOrder = filtered.sort(function (a,b) {
        aAge=a.yearOfDeath-a.yearOfBirth;
        bAge=b.yearOfDeath-b.yearOfBirth;
        return aAge>bAge ? -1 : 1;
    });

    return ageOrder[0];
}

// Do not edit below this line
module.exports = findTheOldest;
