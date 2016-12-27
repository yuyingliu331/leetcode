// [1, 2, 3]   123
// [123]  == [124]
//[4, 1, 2]

function plusOne(digit){
  let len = digit.length;
  stepOne(len-1);
  return digit;

function stepOne(len){
  if(digit[len] == 9){
    digit[len] = 0;
    if(len == 0) digit.unshift(1);
    else stepOne(len-1);
  }
  else digit[len]++;
 }
};
