function makeLine(length) {
  let line = "";
  for (let j = 1; j <= length; j++) {
  line = line + "* ";

}
return line + "\n";
}

  function buildTriangle (length) {
  let triangle = "";
  for (let lineNumber = 1; lineNumber <= length; lineNumber++) {
    triangle += makeLine(lineNumber);

}
  return triangle;
}
console.log(buildTriangle(10));
