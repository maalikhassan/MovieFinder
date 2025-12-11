// ===== LOADING SCREEN =====
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    const mainContent = document.getElementById('mainContent');
    
    // Simulate loading time (2 seconds to match animation)
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.style.display = 'block';
            mainContent.style.opacity = '0';
            mainContent.style.transition = 'opacity 0.5s ease';
            
            setTimeout(() => {
                mainContent.style.opacity = '1';
            }, 50);
        }, 500);
    }, 2000);
});

// ===== SEARCH FUNCTIONALITY =====
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const randomBtn = document.getElementById('randomBtn');
const genreButtons = document.querySelectorAll('.btn-genre');
const movieGrid = document.getElementById('movieGrid');

// Search button click handler
searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        console.log('Searching for:', query);
        // API call will go here
    }
});

// Enter key in search input
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

// Random button click handler
randomBtn.addEventListener('click', () => {
    console.log('Getting random movie');
    // API call will go here
});

// Genre button click handlers
genreButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        genreButtons.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const genre = btn.getAttribute('data-genre');
        console.log('Selected genre:', genre);
        // API call will go here
    });
});

// Movie card click handler (for navigation to details page)
function setupMovieCardListeners() {
    const movieCards = document.querySelectorAll('.movie-card');
    movieCards.forEach(card => {
        card.addEventListener('click', () => {
            // Get movie ID from data attribute (will be set when loading from API)
            const movieId = card.getAttribute('data-movie-id');
            if (movieId) {
                window.location.href = `details.html?id=${movieId}`;
            }
        });
    });
}

// Initialize
setupMovieCardListeners();
