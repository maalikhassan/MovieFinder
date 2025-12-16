/* ========================================
   DETAILS PAGE - Shows information about one movie
   ======================================== */


/* ========================================
   STEP 1: GET THE MOVIE ID FROM THE URL
   ======================================== */

// When you click a movie card, the URL will look like: details.html?id=tt1234567
// We need to get the "id" part from the URL

// Get the full URL of the current page
var currentUrl = window.location.search;  // This gives us: ?id=tt1234567

// Create a helper to read the URL parameters
var urlParams = new URLSearchParams(currentUrl);

// Get the value of "id" from the URL
var movieId = urlParams.get('id');  // This gives us: tt1234567


/* ========================================
   STEP 2: BACK BUTTON FUNCTIONALITY
   ======================================== */

// Get the back button
var backBtn = document.getElementById('backBtn');

// When someone clicks the back button
backBtn.addEventListener('click', function() {
    // Go back to the home page
    window.location.href = 'index.html';
});


/* ========================================
   STEP 3: CHECK IF WE HAVE A MOVIE ID
   ======================================== */

// If we have a movie ID, load the movie details
if (movieId) {
    console.log('Loading movie with ID: ' + movieId);
    loadMovieDetails(movieId);
} else {
    // If no movie ID, show an error message
    console.log('Error: No movie ID found in URL');
    alert('No movie ID found. Returning to home page.');
    // Optionally, send user back to home page
    // window.location.href = 'index.html';
}


/* ========================================
   STEP 4: FUNCTION TO LOAD MOVIE DETAILS
   ======================================== */

function loadMovieDetails(id) {
    console.log('Fetching details for movie ID: ' + id);
    
    // TODO: Later you will add API code here to get real movie data
    
    // For now, we'll show example data
    var exampleMovie = {
        title: 'Example Movie Title',
        year: '2024',
        genre: 'Action, Adventure',
        director: 'John Director',
        cast: 'Actor One, Actor Two, Actor Three',
        rating: '8.5/10',
        runtime: '120 minutes',
        plot: 'This is where the movie plot will appear. Later, you will get this from the API.',
        imdbId: id,
        poster: ''  // Empty for now, will come from API
    };
    
    // Display the movie information on the page
    showMovieOnPage(exampleMovie);
}


/* ========================================
   STEP 5: FUNCTION TO DISPLAY MOVIE INFO
   ======================================== */

function showMovieOnPage(movie) {
    // Update the movie title
    document.getElementById('movieTitle').textContent = movie.title;
    
    // Update the year
    document.getElementById('movieYear').textContent = movie.year;
    
    // Update the genre
    document.getElementById('movieGenre').textContent = movie.genre;
    
    // Update the director
    document.getElementById('movieDirector').textContent = movie.director;
    
    // Update the cast
    document.getElementById('movieCast').textContent = movie.cast;
    
    // Update the rating
    document.getElementById('movieRating').textContent = movie.rating;
    
    // Update the runtime
    document.getElementById('movieRuntime').textContent = movie.runtime;
    
    // Update the plot
    document.getElementById('moviePlot').textContent = movie.plot;
    
    // Update the IMDb ID
    document.getElementById('movieImdbId').textContent = movie.imdbId;
    
    // Update the poster image (if available)
    if (movie.poster && movie.poster !== '') {
        document.getElementById('moviePoster').src = movie.poster;
    }
    
    console.log('Movie details displayed successfully');
}
