var fib = num =>{
  if(num < 2) return n;
  else fib(num -1) + fib(num -2);
}

var fibArr = [0, 1, 1];
var fib = num => {
 if(num > 2){
  if(!fibArr[num -1]) fibArr[num -1] = fib(num -1);
  if(!fibArr[num -2]) fibArr[num -2] = fib(num -2);
  return fibArr[num -1] + fibArr[num -2];
 }
  else if(num < 2){
    return num;
  }else return 1;
}

fib(3) == fib(2)
