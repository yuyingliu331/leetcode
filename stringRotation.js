var isString = (str1, str2) =>{
  if(str.length != str2.length) return false;
  let firIndex = 0;
  let secIndex = 0;
  let count = 0;
  while(secIndex < str2.length){
    while(str1[firIndex] == str2[secIndex]) {
      firIndex++;
      secIndex++;
    }
      secIndex++;
    }
  let firPart = str1.substring(firIndex, str1.length);
  let secPart = str2.substring(0, firIndex);
  if(firPart.split('').reverse().join('') == secPart) return true;
  else return false;

}
