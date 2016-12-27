var findRotationPoint = words => {
  let start = 0;
  let end = words.length -1; //noted this has to be -1
  let initial = parseInt(words[0].charAt(0), 16);
  while(start < end){
    let mid = Math.floor(start + (end - start) / 2);
    let char = parseInt(words[mid].charAt(0), 16);
    let char1 = parseInt(words[mid+1].charAt(0),16);
    if(mid == 0 || char > char1) return mid;
    else if(initial < char) start = mid;
    else char end=mid;

    if(start == end -1) break;
      }
  return end;
}
