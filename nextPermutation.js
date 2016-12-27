var nextPer = numbers=>{
 // [ 2, 6, 5, 4, 3, 1]
 //[2, 6, 3, 4, 2, 1]
 //

 // [3, 1, 2, 4, 5, 6]
 var len = nums.length;
 var permIndexL = len - 1;
 var permIndexR;
 var permL;
 var i;
 for(i = len-1; i>= 1; i--){
  if(nums[i-1] < nums[i]){ //permutation found
    permIndexL = i-1;     // permIndexL = 0;
    break;
  }
 }
 if(permIndexL == len-1){ //not found
  swap(0, len-1); // resort everything
 }else{
    permL= nums[permIndexL]; // permL = nums[0] = 2;
    swap(permIndexL + 1, len-1); //resort the remaining: swap(1, 5);
    find(permIndexL+1, len-1, permL);  // find(1, 3, 2);
    nums[permIndexL] = nums[permIndexR]; //nums[0] = nums[2] = 3;
    nums[permIndexR] = permL;    // nums[2] = 2;
  }
  function swap(start, end){   //swap everything that after the key point and make the order become ascending order instead of descending order:
    var halfLen = Math.floor((end+1-start) / 2); //halfLen = (5+1-1)/ 2 = 2;
    for(i = 0; i < halfLen; i++){
      var num = nums[start + i];     //num = nums[1] = 6;    num=nums[2]= 5;
      nums[start+i] = nums[end - i];   // nums[1] = nums[5] =1; nums[2]=nums[4]=3;
      nums[end - i] = num;   //nums[5] = 6; nums[4] = \=
    }      //[3, 1, 2, 4 , 5, 6]
  }
  //find the first element > perm
  function find(start, end, perm){   // 1, 5, 2
    for(i = start, i <= end; i++){
      if(nums[i] > perm) break;     // nums[i] = 3 > 2 break;
    }
    permIndexR = i;     // permIndexR = 2;
  }
};
