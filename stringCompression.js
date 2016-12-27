var stringCompression = str => {
  let count = 1;
  let firstIndex = 0;
  let secondIndex = 1;
  let newstr = '';
  while(secondIndex < str.length){
    while(str[firstIndex] == str[secondIndex]){
      count++;
      secondIndex++;   //secondIndex = 2; 5
    }
    var len = newstr.length;
    newstr[len] = str[firstIndex];    //newstr = [2] = b
    if(count != 1) new[len+1] = str[count];    //a2; secondindex = 2;
    count =1;
    firstIndex = secondIndex; //first index = second index = c;
    secondIndex++;     //second index = 4 =[c]
  }
}


//  aabcccccaa
