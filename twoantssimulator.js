function runSimulation(initialStateOfWorld) {
 var input = initialStateOfWorld;

  if(input.length === 0 || input === null) return "";
  var result = new Array (Number(input.length + 1));

  for(var i = 0; i < result.length; i++){
    result[i] = new Array(input.length);
  }

  for(var j = 0; j< input.length; j++){
    result[0][j] = input[j];
  }

  // get the second to last row populated based on the logic:
  result = getArray(result);
  console.log(result);

  result = result.join('\n');



  var str = '';
  for(var i = 0; i < result.length; i ++){
    for(var j = 0 ; j < input.length; j++){
      str = str.concat(result[i][j]);
    }
    if(i != result.length -1) str = str.concat('\n');
  }

  console.log(str);

}


function getArray(result){
  for(var i = 1; i < result.length; i++){
    for(var j = 0; j < result.length -1; j++){

      var prev = result[i-1][j-1];
      var next = result[i-1][j+1];

      if( (prev != null) && (next != null) ) {
         if(prev == '>' || prev == '+'){
          if(next == '<' || next == '+') result[i][j] = '+';
          else result[i][j] = '>';

        }
        if(prev == '<' || prev == '.'){
          if(next == '<' || next == '+') result[i][j] = '<';
          else result[i][j] = '.';
        }

     }
      if((prev == null) ||  (next == null)) {
        if((next == '<') || (next == '+')) {
         result[i][j] = '<';
       }


        if((prev == '>') || (prev == '+')) {
          result[i][j] = '>';
        }

        else{
            result[i][j] = '.';
        }
     }
   }
}
   return result;

}

