// ===== DETAILS PAGE =====

// Get movie ID from URL
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

// Back button
const backBtn = document.getElementById('backBtn');
backBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
});

// Load movie details
if (movieId) {
    loadMovieDetails(movieId);
} else {
    console.error('No movie ID provided');
    // Optionally redirect back to home
    // window.location.href = 'index.html';
}

function loadMovieDetails(id) {
    console.log('Loading details for movie ID:', id);
    
    // API call will go here
    // For now, display placeholder data
    displayMovieDetails({
        title: 'Movie Title',
        year: 'Year',
        genre: 'Genre',
        director: 'Director Name',
        cast: 'Actor 1, Actor 2, Actor 3',
        rating: 'Rating',
        runtime: 'Runtime',
        plot: 'Movie plot description will appear here...',
        imdbId: id,
        poster: ''
    });
}

function displayMovieDetails(movie) {
    document.getElementById('movieTitle').textContent = movie.title;
    document.getElementById('movieYear').textContent = movie.year;
    document.getElementById('movieGenre').textContent = movie.genre;
    document.getElementById('movieDirector').textContent = movie.director;
    document.getElementById('movieCast').textContent = movie.cast;
    document.getElementById('movieRating').textContent = movie.rating;
    document.getElementById('movieRuntime').textContent = movie.runtime;
    document.getElementById('moviePlot').textContent = movie.plot;
    document.getElementById('movieImdbId').textContent = movie.imdbId;
    
    if (movie.poster) {
        document.getElementById('moviePoster').src = movie.poster;
    }
}
