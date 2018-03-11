var katzDeli = [];

function takeANumber(katzDeli, name){
  var num;
  
  katzDeli.push('${name}');
  num = katzDeli.find('${name}');
  num++;
  return ('Welcome, ${name}. You are number ${num} in line.');
}