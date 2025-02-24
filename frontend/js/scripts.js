async function getMovies() {
    try {
        const response = await fetch('http://localhost:3000/movies'); // Llamada al Gateway
        const movies = await response.json();
        displayMovies(movies);
    } catch (error) {
        console.error("Error cargando películas:", error);
    }
}


function displayMovies(movies) {
    const moviesContainer = document.getElementById('movies-list');
    moviesContainer.innerHTML = ''; // Limpiar contenido previo

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        movieElement.innerHTML = `
            <img class="row__poster" src="${movie.poster}" alt="${movie.title}">
            <h3 class="movie__title">${movie.title}</h3>
        `;

        moviesContainer.appendChild(movieElement);
    });
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", getMovies);