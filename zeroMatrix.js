var zeroMatrix = matrix =>{
 // store the column and row number for the mark
 let row = new Array(matrix.length);
 let column = new Array(matrix[0].length);
   for(var i = 0; i < row.length; i++){
    for(var j = 0; j < column.length; j++){
      if(matrix[row][column] == 0){
        row[i] = true;
        column[j] = true;
      }
    }
   }
   for(var i=0; i < row.length; i++){
    if(row[i]) fillRow(matrix, i);
   }
   for(var i =0; i < column.length;i++){
    if(column[i]) fillColumn(matrix, i);
   }
   function fillRow(matrix, rowNum){
    for(var i = 0; i< matrix.length; i++){
       matrix[rowNum][i] = 0;
    }
   }
   function fillColumn(matrix, colNum){
    for(var i = 0; i < matrix.length; i++){
      matrix[i][col] = 0;
    }
   }

}






