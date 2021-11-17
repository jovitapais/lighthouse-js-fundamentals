let loopyLighthouse = function(range, multiples, words) {
  for (let i = range[0]; i <= range[1] ; i++ ) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      console.log (words[0] + words[1]);
    } else if (i % multiples[0] === 0) {
      console.log (words[0]);
    } else if (i % multiples[1] === 0) {
      console.log (words[1]);
    } else {
      console.log(i);
    }
  }
}
<<<<<<< HEAD:Loopy_Lighthouse_2.js
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);/*  */
=======
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
>>>>>>> 11ae967cf041fb3dc99edfb15f605235d70b03f8:Loopy Lighthouse 2.js
