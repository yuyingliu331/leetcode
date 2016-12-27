var checkMovieTime = (flightLength, movieLength) =>{
 var movieLengthSeen = new Set();
 for(var i = 0; i < movieLength.length; i++){
  var firstMovie = movieLength[i];
  var secondMovie = flightLength - movieLength;
  if(movieLengthSeen.has(secondMovie)){
    return true;
  }
  movieLengthSeen.add(firstMovie);
 }
 return false;
}
