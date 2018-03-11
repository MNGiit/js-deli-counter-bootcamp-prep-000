var katzDeli = [];

function takeANumber(katzDeliLine, name){
  var num;
  
  katzDeliLine.push(name);
  num = katzDeliLine.find(name);
  num++;
  return katzDeliLine;
}