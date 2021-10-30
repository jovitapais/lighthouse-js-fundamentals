let whichSchool = function (age) {
  if (age > 0 && age < 13) {
    return "Elementary School"; 
  }  else if (age >= 13 && age <= 18) {
    return "Secondary School";
  }  else if (age > 18 && age <= 100) {
    return "Lighthouse Labs";
  }
};

console.log("I am 37. Which school should I go to?");
console.log(whichSchool(37));
console.log("I am 5. Which school should I go to?");
console.log(whichSchool(5));
console.log("I am 18. Which school should I go to?");
console.log(whichSchool(18));
