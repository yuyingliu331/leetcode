
var isPalindrome = function(x) {
  if(x.toString() === 1){
    return true;
  }
  else if(x.toString() === 2){
    if(x.charAt(0) === '-') return true;
    else if (x.charAt(0) === x.charAt(1)) return true;
    else return false;
  }


};
