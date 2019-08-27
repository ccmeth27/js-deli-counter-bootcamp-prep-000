var katzDeli = [];
var otherDeli = ["Steven", "Blake", "Avi"];
let x = 0
function takeANumber(katzDeli) {
  debugger
  katzDeli.push(x);
  x++;
  return(`Welcome, You are number ${katzDeli.length} in line.`);
}
function nowServing(katzDeliLine) {
  // let n = 0; 
  // while (n < katzDeliLine.length) {
 //   n++;
 //  }
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return(`Currently serving ${katzDeliLine.shift()}.`);
  }
}

var lineSize = [];
function currentLine(katzDeliLine) {
  let x = 0;
  while (x < katzDeliLine.length) {
    lineSize.push(` `+[x + 1]+`. `+ katzDeliLine[x]);
    x++;
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  else {
    return(`The line is currently:` + lineSize);
  }
}
