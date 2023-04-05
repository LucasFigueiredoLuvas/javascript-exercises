const findTheOldest = function(people) {
    return people.reduce((prevPerson, currPerson) => {
        let prevPersonAge = getAge(prevPerson.yearOfBirth, prevPerson.yearOfDeath);
        let currPersonAge = getAge(currPerson.yearOfBirth, currPerson.yearOfDeath);
        if(prevPersonAge < currPersonAge) {
            return currPerson;
        }
        else {
            return prevPerson;
        }
    });
};

const getAge = function(birth, death) {
    if(!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
]

console.log(findTheOldest(people));
