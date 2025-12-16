/* ========================================
   STEP 1: HIDE LOADING SCREEN AND SHOW MAIN PAGE
   ======================================== */

// This code runs when the page finishes loading
window.addEventListener('load', function() {
    // Get the loading screen element
    var loadingScreen = document.getElementById('loadingScreen');
    // Get the main content element
    var mainContent = document.getElementById('mainContent');
    
    // Wait 2 seconds (2000 milliseconds) before hiding loading screen
    setTimeout(function() {
        // Hide the loading screen
        loadingScreen.style.display = 'none';
        // Show the main content
        mainContent.style.display = 'block';
    }, 2000);
});


/* ========================================
   STEP 2: GET ALL THE BUTTONS AND INPUTS
   ======================================== */

// Get the search button
var searchBtn = document.getElementById('searchBtn');

// Get the search input box
var searchInput = document.getElementById('searchInput');

// Get the random button
var randomBtn = document.getElementById('randomBtn');

// Get all genre buttons (Action, Comedy, Romance)
var genreButtons = document.querySelectorAll('.btn-genre');

// Get the movie grid container
var movieGrid = document.getElementById('movieGrid');


/* ========================================
   STEP 3: SEARCH BUTTON FUNCTIONALITY
   ======================================== */

// When someone clicks the search button
searchBtn.addEventListener('click', function() {
    // Get the text from the search input
    var searchText = searchInput.value;
    
    // Remove extra spaces from the beginning and end
    searchText = searchText.trim();
    
    // Check if the user typed something
    if (searchText !== '') {
        // Show what the user searched for in the console
        console.log('User searched for: ' + searchText);
        
        // TODO: Later you will add API code here to search for movies
        alert('You searched for: ' + searchText);
    } else {
        // If search box is empty, show an alert
        alert('Please type a movie name or IMDb ID');
    }
});


/* ========================================
   STEP 4: PRESS ENTER TO SEARCH
   ======================================== */

// When someone presses a key in the search box
searchInput.addEventListener('keypress', function(event) {
    // Check if the key pressed is "Enter"
    if (event.key === 'Enter') {
        // Trigger the search button click
        searchBtn.click();
    }
});


/* ========================================
   STEP 5: RANDOM BUTTON FUNCTIONALITY
   ======================================== */

// When someone clicks the random button
randomBtn.addEventListener('click', function() {
    console.log('Random movie button clicked');
    
    // TODO: Later you will add API code here to get a random movie
    alert('Random movie feature - API will be added later');
});


/* ========================================
   STEP 6: GENRE BUTTONS FUNCTIONALITY
   ======================================== */

// Loop through each genre button (Action, Comedy, Romance)
for (var i = 0; i < genreButtons.length; i++) {
    // Add a click event to each button
    genreButtons[i].addEventListener('click', function() {
        
        // STEP 6A: Remove the 'active' class from all buttons
        for (var j = 0; j < genreButtons.length; j++) {
            genreButtons[j].classList.remove('active');
        }
        
        // STEP 6B: Add 'active' class to the button that was clicked
        this.classList.add('active');
        
        // STEP 6C: Get the genre name from the button
        var genreName = this.getAttribute('data-genre');
        console.log('Selected genre: ' + genreName);
        
        // TODO: Later you will add API code here to filter movies by genre
        alert('You selected: ' + genreName);
    });
}


/* ========================================
   STEP 7: CLICK ON MOVIE CARDS
   ======================================== */

// Function to make movie cards clickable
function makeMovieCardsClickable() {
    // Get all movie cards
    var movieCards = document.querySelectorAll('.movie-card');
    
    // Loop through each movie card
    for (var i = 0; i < movieCards.length; i++) {
        // Add a click event to each card
        movieCards[i].addEventListener('click', function() {
            // Get the movie ID from the card (will be added when you load movies from API)
            var movieId = this.getAttribute('data-movie-id');
            
            // Check if the movie has an ID
            if (movieId) {
                // Go to the details page and pass the movie ID
                window.location.href = 'details.html?id=' + movieId;
            } else {
                console.log('This movie card does not have an ID yet');
            }
        });
    }
}

// Run the function to make cards clickable
makeMovieCardsClickable();
