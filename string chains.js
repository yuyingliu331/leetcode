function longestChain(arr){
  // expected arr: ["a", "b", "abc", ....];

  if(arr.length === 0 || arr === null) return 0;
  var finalCount = 0;
  var count;
  for(var i = 0; i < arr.length; i++){
    var str = arr[i];
    if(str.length > 1) {
       count = getCount(arr[i], arr, 1);
    }
   if(finalCount < count) finalCount = count;
  }
  return finalCount;
}

function doExist(str, arr){
  if(arr.indexOf(str) > -1) return true;
  return false;
}

function getStr(str, arr){
  var arrR = [];
  for(var i = 0; i < str.length; i++){
      var str1 = '';
        str1 = str.slice(0, i) + str.slice(i+1, str.length);
    if(doExist(str1, arr)) arrR.push(str1);
  }
  return arrR;
}

function getCount(str, arr, count){
   var arrR= getStr(str, arr);
   //console.log("count in get count", count, "str", str);
   for (var i = 0; i < arrR.length; i++){
    if(doExist(arrR[i], arr)) {
     count++;
     return getCount(arrR[i], arr, count);
    }
   }
  return count;
}

