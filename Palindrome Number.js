
var isPalindrome = function(x) {
  x = x.toString();
  if(x.length <= 1){
    return true;
  }
  else if(x.length === 2){

    if(x.charAt(0) === '-') return false;
    else if (x.charAt(0) === x.charAt(1)) return true;
    else return false;
  }
  else{
    if(x.charAt(0) === '-') return false;
    for(var i = 0; i < x.length /2; i++){
    console.log(x.charAt(i));
      if(x.charAt(i) != x.charAt(x.length -1-i)) return false;
    }
    return true;
  }


};
