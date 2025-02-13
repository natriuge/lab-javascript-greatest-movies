// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors (arr) {
  const allDirectors = arr.map(function (element) {
    let pickElement;
    pickElement = element.director;
    return pickElement;
  })
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (arr) {
  const total = arr.filter (function (element) {
    return element.director.includes('Steven Spielberg') && element.genre.includes('Drama');
  })
  return total.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
    if (!arr.length) {
      return 0;
  }
    let getScores = arr.map (function (element) {
      if (element.score) {
        return element.score;
      } else {
        return 0;
      }
    });
    let sum = getScores.reduce (function (accumulator, currentNumber) {
      return accumulator + currentNumber
    });
    let totalScore = sum / getScores.length;
    return +totalScore.toFixed(2);
  }


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore (arr) { 
  const dramaPick = arr.filter (function (element) {
    return element.genre.includes('Drama');
  });
  if (!dramaPick.length) {
    return 0;
  }
    let getScores = dramaPick.map (function (element) {
      if (element.score) {
        return element.score;
      } else {
          return 0;
      }
    });
    let sum = getScores.reduce (function (accumulator, currentNumber) {
      return accumulator + currentNumber
    });
    let totalScore = sum / getScores.length;
    return +totalScore.toFixed(2);
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear (array) {
  let arrCopy = [...array]
  let orderingArr = arrCopy.sort (function (a, b) {
    if (a.year < b.year) {
      return -1;
    } if (a.year > b.year) {
      return 1;
    } else {
    return a.title.localeCompare(b.title)
    }
 });
 return orderingArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically (array) {
  let arrCopy = [...array]
  let sortingTitle = arrCopy.sort( function (a, b) {
    let ordering = a.title.localeCompare(b.title)
    return ordering;
}); 
  let result = sortingTitle.map(function (element) { 
    let pickElement = element.title;
    return pickElement;
  })  
  return result.slice(0, 20);
      
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
