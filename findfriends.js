function processData(input) {
    //Enter your code here
    if(input.length === 0 || input === null)  return 0;
    var len = Number(input.charAt(0));
    var newInput = input.substring(1, input.length);
    var arr = [];
    var realInput = [];
     for(var i = 0 ; i < newInput.length; i++){
       if(newInput.charAt(i) === 'Y' || newInput.charAt(i) === 'N'){
          arr.push(newInput.charAt(i));
          if(arr.length === len) {
            realInput.push(arr);
            arr = [];
          }
       }
     }

    var friendCircle = 0;
    var visited = new Array(len);

    for(var i = 0; i < len; i++){
        if(!visited[i]){
            visited[i] = true;
            friendCircle++;
            ifSameCircle(i, realInput, visited);
        }
    }
    console.log(friendCircle);
}

function ifSameCircle(position, realInput,visited){
    for(var i = 0; i < realInput.length; i++){
        if((i != position) && (realInput[position][i] == 'Y') && !visited[i]){
           visited[i] = true;
           ifSameCircle(i, realInput, visited);
         }
    }

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
