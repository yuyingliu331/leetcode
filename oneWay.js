var oneWay = (str1, str2) => {
  //insert, remove, replace:
  if(Math.abs(str1.length - str2.length) > 1) return flase;
  else{
    let lengD = Math.abs(str1.length - str2.length);
    if(lenD == 0){
      //check if it is replacement:
      return checkReplace(str1, str2);
    }else if(str1.length > str2.length){
      //insertion or removal:
      return checkInsertion(str1, str2);
    }else{
      return checkInsertion(str2, str1);
    }
  }
}

let checkReplace = (str1, str2) =>{
 let foudnDifference = false;
 for(let i = 0; i < str1.length; i++){
   if(str1[i] != str2[i]){
     if(foudnDifference){
      return false;
     }
     foudnDifference = true;
   }
 }
}

let checkInsertion = (str1, str2)=>{
  let canbeInserted = false;
  let index1 = 0;
  let index2 = 0;

    // abcde      abce
    // beldf      bedf
    while(index1 < str1.length && index2 < str2.length){
      if(str1[index1] != str2.[index2]){
        if(index1 != index2){
          return false;
        }
        index1++;
     }else{
        index1++;
        index2++;
      }
    }
  return true;
}



