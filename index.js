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
  if (katzDeli.length === 0){
    return ("The line is currently empty.")
  }
  else for (var i = 0; i < katzDeli.length; i++){
    theline.push(i+1 +'. ' + katzDeli[i])
  } return theline;
}