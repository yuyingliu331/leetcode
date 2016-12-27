var rotationMatrix = arr => {
 // 1  2  3  4
 // 5  6  7  8
 // 9 10 11 12
 // 13 14 15 16


  13  9  5  1
  14  6  7  2
  15 10  11 3
  16 12  8  4
 let higher,
     lower,
     left,
     right;
// temp top[i];

  while(higher <= lower && left <= right){

    var temp = [[]];
    // left -- > top
    for(var i = higher; i <= lower; i++){
      temp[higher][i] = arr[higher][i];
      arr[higher][i] = arr[i][left];
    }
    // bottom -> left
    for(var i = left; i <= right; i++){
      arr[i][left] = arr[lower][i];
    }
    // right --> bottom
    for(var i = higher; i <= lower; i++){
      arr[lower][i] = arr[i][right];
    }
    //top --> right;
    for(var i = left; i <= right; i++){
      arr[i][right] = temp[higher][i];
    }

    higher++;
    lower--;
    left++;
    right--;

  }


}
