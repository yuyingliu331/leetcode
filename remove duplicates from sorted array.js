var removeDuplicates = function(nums) {
    //[1,1,2]: it is sorted.

    for(var i=0; i < nums.length -1; i++){
      if(nums[i] === nums[i+1]) nums.splice(i, 1);

    }
};
