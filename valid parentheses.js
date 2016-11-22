var isValid = function(s) {
  var stack = [];
  s = s.split("");
  if(s.length === 0) return true;
  for(var i = 0; i < s.length; i++){
    if(stack.length === 0) stack.push(s[i]);
    else{
       if(isMatch(stack[stack.length -1], s[i])) stack.pop();
       else{
        if(!isValidChar(s[i]) ) return false;
        stack.push(s[i]);
       }

    }
  }
  return stack.length === 0;
};

function isMatch(str1, str2){
  var obj = {
    '{' : "}",
    '(' : ")",
    '[' : "]"
  };
  if(obj[str1] === str2) return true;
  else return false;

}

function isValidChar(str){
  if(str === '{' || str === '(' || str === '[' ) return true;
  else return false;
}
