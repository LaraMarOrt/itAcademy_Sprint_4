// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map((pelicula) => pelicula.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const result = array.filter((pelicula) => pelicula.director === director);
  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const directorScore = getMoviesFromDirector(array, director).map((pelicula) => pelicula.score);
  const result = directorScore.reduce((a, b) => (a + b) / directorScore.length);
  console.log("EXERCICE 3 ->", result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const titleFilter = array.map((pelicula) => pelicula.title);
  const result = titleFilter.sort().slice(0, 20);
  console.log("EXERCICE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const result = array.sort(function (a, b) {
    if (a.year === b.year) {
      // Title sólo se mira si los años son iguales
      return a.title.localeCompare(b.tiltle);
    }
    return a.year > b.year ? 1 : -1;
  });
  console.log("EXERCICE 5 ->", result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const genreFilter = array.filter((pelicula) => pelicula.genre.includes(genre) && pelicula.score != '');
  const genreScore = genreFilter.map((pelicula) => pelicula.score);
  const result = genreScore.reduce((a, b) => (a + b) / genreScore.length);
  console.log("EXERCICE 6 ->", result);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const result = array.map(function (pelicula) {
    let duration = pelicula.duration + '';
    let durationArray = duration.split(/\s+/);
    let hours = (durationArray[0]) ? parseInt(durationArray[0])*60 : 0;
    let min = (durationArray[1]) ? parseInt(durationArray[1]) : 0;
    pelicula.duration = hours+min;
    return pelicula;
})
  console.log("EXERCICE 7 ->", result);
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const result = array.filter(pelicula => pelicula.year == year).sort((a, b) => b.score - a.score).slice(0, 1);
  console.log("EXERCICE 8 ->", result);
  return result;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
