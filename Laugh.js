
// Declare an empty string
let sound = "";
// An anonymous function expression stored in the variable `laugh`
var laugh = function (num) {
    for (i = 0 ; i < num; i++) { //Iterate
        sound = sound + "ha";
    }
    return sound + "!";
};/* finish the function expression */
// It is essential that the function must return a string
console.log(laugh(10));


