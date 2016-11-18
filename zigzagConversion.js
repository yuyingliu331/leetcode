/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

 // example: PAYPALISHIRING


var convert = function (s, numRows) {
    if (numRows == 1) return s;
    var rowCur = 0;

    var bVertical = true;
    var len = s.length;
    var arrays = [];
    for (var posCur = 0; posCur < len; posCur++) {
        if (posCur < numRows) {
            arrays[rowCur] = [s.charAt(posCur)];
        }
        else {
            arrays[rowCur].push(s.charAt(posCur));
        }
        //prepare for next position
        if (bVertical) { //going straight down
            if (rowCur == numRows - 1) { //bottom reached
                rowCur--;

                bVertical = false;
            }
            else
                rowCur++;
        }
        else {
            if (rowCur == 0) { //top reached
                rowCur++;
                bVertical = true;
            }
            else {
                rowCur--;

            }
        }

    }
    return arrays.reduce(function (sum, array) {
        return sum + array.join("");
    }, "");
};


