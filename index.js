var katzDeli = [];

function takeANumber(katzDeli, name){
  var num;
  
  katzDeli.push(`${name}`);
  
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing (katzDeli){
  
  if (katzDeli === 0){
    return 'There is nobody waiting to be served!';
  }
  else {
    return (`Currently serving ${katzDeli.shift()}.`);
  }

}