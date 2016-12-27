//  [1,3],[2,6], [6, 9], [8,10],[15,18], [20, 21]
// [1,9],[8,10],[15,18], [20, 21]
// [1, 10] [15, 18]
//

var merge = function(intervals) {
    var len = intervals.length;
    if (len === 0) return intervals;
    var result = [intervals[0]];
    for (var i = 1; i < len; i++) {
        insert(intervals[i]);
    }
    return result;

    function insert(newInterval) {
        var resL = search(0, result.length - 1, newInterval.start); //search(0, 1, 20)  [1,1]
        var resR = search(resL[0], result.length - 1, newInterval.end); // search(0, 0, 9) == [1, 1]
        if (resL[0] === resR[0] && resL[1] === 0 && resR[1] === 0) return;
        var newLeft = resL[1] === 0 ? result[resL[0]].start : newInterval.start; // 20
        var newRight = resR[1] === 0 ? result[resR[0]].end : newInterval.end;  //  21
        var start = resL[0] + (resL[1] > 0 ? 1 : 0);   //    1 + 1 = 2
        var numDelete = resR[0] - resL[0];  // 1 - 1 = 0
        if (resR[1]>=0 && resL[1]<=0) numDelete++;    // 0
        result.splice(start, numDelete, new Interval(newLeft, newRight));   // splice(2, 0, [21, 22]) // need to delete the old element.
    }

    function search(iStart, iEnd, num) {   // 0,1,20
        var interval, iLoc, iHalf;
        if (iStart == iEnd) {
            interval = result[iStart];     // interval = result[1] = [15,18]
            iLoc = locate(interval, num);     // iLoc = locate([15,18], 20) =  1
            return [iStart, iLoc];            // [1, 1]
        }
        iHalf = Math.floor((iStart + iEnd) / 2);  // (0 + 1) / 2 = 0
        interval = result[iHalf];     //result[0] = [1, 10]
        iLoc = locate(interval, num); // locate(1, 10, 20) = 1
        if (iLoc === 0) return [iHalf, iLoc];   //[1,0]
        else if (iLoc < 0) return search(iStart, iHalf, num); //search(0, 1, 6)
        else return search(iHalf + 1, iEnd, num); // (1, 1, 20)

    }

    function locate(interval, num) {          // locate( [1,6], 6)
        if (num < interval.start) return -1;
        else if (num > interval.end) return 1;
        else return 0;
    }
};
