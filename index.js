var katzDeli = [];

function takeANumber(katzDeli, name){
  var num;
  
  katzDeli.push(`${name}`);
  
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing (katzDeli){
  
  if (katzDeli.length === 0){
    return 'There is nobody waiting to be served!';
  }
  else {
    return (`Currently serving ${katzDeli.shift()}.`);
  }

}

var theline = [];

function currentline (katzDeli){

var i = 0;

while (i < katzDeli.length) {
  theline.push(`'+[i+1]'+'. ` + katzDeli[i])
  i++;
}

if (katzDeli.length === 0) {
  return (`The line is currently:` +line);
}
else return ("The line is currently empty.")
}