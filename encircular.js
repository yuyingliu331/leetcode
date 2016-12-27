function Position( f,  s){
    this.first = f;
    this.second = s;
}

function doesCircleExist(steps) {
    if(steps.length == 0 || steps == null) return '';

    var direction = 1;
    var pos = new Position(0,0);
    for(var i= 0;i < 4;i++) {
        for(var j= 0; j< steps.length; j++)
        {
             if(steps.charAt(j)=='G')
             {
                if(direction  == 1) pos.first++;
                if(direction  == 2) pos.second++;
                if(direction  == 3) pos.first--;
                if(direction  == 0) pos.second--;
             }
            if(steps.charAt(j)=='L') {
                direction++;
                direction = direction %4;
            }
            if(steps.charAt(j)=='R') {
                direction --;
                if(direction < 0) direction = 4 + direction;
                direction  = direction % 4;
            }
        }
    }
    if(pos.first == 0 && pos.second == 0 && direction == 1) return "YES";
    return "NO";
}
