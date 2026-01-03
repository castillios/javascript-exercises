const findTheOldest = function(people) {
    return people.sort((a, b) => ((b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth)))[0];
};

// Do not edit below this line
module.exports = findTheOldest;
