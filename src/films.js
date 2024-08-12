const movies = require('./data.js');
// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map(movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
 let result = movies.filter(movie => movie.director === director)
 console.log('EXERCICE 2 ->', result);
 return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let directorMovies = array.filter(movie => movie.director === director);
  if (directorMovies.length === 0) {
    return 0;
  }
  const totalScore = directorMovies.reduce((acc, movie) => {
    return acc + (movie.score || 0);
  }, 0);
 
  const directorScore = totalScore / directorMovies.length;
  let result = parseFloat(directorScore.toFixed(2));
  console.log('EXERCICE 3 ->', result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const result = array
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 20)
    .map(movie => movie.title);
  
  console.log('EXERCICE 4 ->', result);
  return result;
}

// Exercise 5: Order by year, ascending
  function orderByYear(array) {
    const result = array.slice()
    .sort((a, b) => {
      if (a.year !== b.year) {
        return a.year - b.year;
      }
      return a.title.localeCompare(b.title);
    });
  console.log('EXERCICE 5 ->', result);
  return result;
  }

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let genreMovies = array.filter(movie => movie.genre.includes(genre));
  if (genreMovies.length === 0) {
    return NaN;
  }
  const totalScore = genreMovies.reduce((acc, movie) => {
    return acc + (movie.score || 0);
  }, 0);
 
  const genreScore = totalScore / genreMovies.length;
  let result = parseFloat(genreScore.toFixed(2));
  console.log('EXERCICE 6 ->', result);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  return array.map(movie => {

    let hours = 0;
    let minutes = 0;

    const hoursMatch = movie.duration.match(/(\d+)h/);
    const minutesMatch = movie.duration.match(/(\d+)min/);


    if (hoursMatch) {
      hours = parseInt(hoursMatch[1], 10);
    }
    if (minutesMatch) {
      minutes = parseInt(minutesMatch[1], 10);
    }
    const totalMinutes = hours * 60 + minutes;

    console.log(`EXERCICE 6 -> The duration of the movie "${movie.title} is": ${totalMinutes} minutes`);

    return {
      ...movie,
      duration: totalMinutes
    };
  }); 
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array) {

  return Object.values(
    array.reduce((acc, movie) => {
      if (!acc[movie.year] || movie.score > acc[movie.year].score) {
        acc[movie.year] = movie;
      }
      console.log(`EXERCICE 7 ->`, acc)
      return acc;
    }, {})
  );
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
