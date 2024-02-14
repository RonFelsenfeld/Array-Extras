'use strict'

var gMovies = [
  { imdb: 'tt0373889', name: 'Harry Potter', rate: 17 },
  { imdb: 'tt0000004', name: 'Un bon bock', rate: 20 },
  { imdb: 'tt0000003', name: 'Pauvre Pierrot', rate: 15 },
]

////////////////////////////////////////////////////

// Task 01

console.log(getMovieLink('tt0373889'))

function getMovieLink(imdb) {
  const movie = gMovies.find((movie) => movie.imdb === imdb)
  const linkStr = `<a href="https://www.imdb.com/title/${movie.imdb}/">${movie.name}</a>`
  return linkStr
}

// Task 02

// gMovies = deleteMovie('tt0000003')
// console.log(gMovies)

function deleteMovie(imdb) {
  const movieIdx = gMovies.findIndex((movie) => movie.imdb === imdb)
  gMovies.splice(movieIdx, 1)
  return gMovies
}

// Task 03

// sortByName(gMovies)
// console.log(gMovies)

function sortByName() {
  gMovies.sort((movie1, movie2) => {
    if (movie1.name > movie2.name) return 1
    if (movie1.name < movie2.name) return -1
    return 0
  })
}

sortByRate(gMovies)
console.log(gMovies)

function sortByRate() {
  gMovies.sort((movie1, movie2) => movie1.rate - movie2.rate)
}
