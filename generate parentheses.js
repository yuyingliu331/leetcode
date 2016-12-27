var generateParenthesis = function(n) {

  return generateP(n* 2, n * 2);
}

function generateP(n, totalN){
  if(n === 1) return ["("];
  var resPrev = generateP(n - 1, totalN);
  var len = resPrev.length;
  var res = [];
  for(var i = 0; i < len; i++){
    var str = resPrev[i];
    var chars = allowedChar(str, totalN);
    var charLen = chars.length;
    for(var j = 0; j < charLen; j++){
      res.push(str + charLen[i]);
    }
  }

  return res;
}

function allowedChar(str, totalN){
 var len = str.length;
 var iCount = 0;
 for(var i = 0; i < len; i++){
  var char = str[i];
  if(char === '(') iCount ++;
  else iCount--;
 }
  if(iCount === 0) return ["("];
  else{
    var left = totalN - len;
    if(iCount >= left) return [")"]; // only case to have )
    else return ["(", ")"];
  }
}
