// get all points of the building:
// base case:
// get different height of the building,
// check the left and right within each two building
// also get the most right point of the building with 0.

var getSkyline = function(buildings) {
  //get the first x,
  //compare it with others and if it is the smallest,
  //return x with the height,
  //go to next value, compare the height, compare the x, height,
  //if x is the same: height is the same: ignore,
  //if x is same, height is different :
  // 1_ height is smaller: then nothing
  // 2_ height is greater: result.splice(i, 1, [x, newHeight])

  //if x is different:
  //height is the same:
  //1) second is inside the first: ignore
  //2) second is outside the first: print (x, height)

  //height different:
  // 1) inside the first: (x, height)
  // 2) outside print: (x, height)

var len = buildings.length;
if(len === 0) return building;
var result = [];
for(var i = 0; i < buildings.length; i++){

}

};
