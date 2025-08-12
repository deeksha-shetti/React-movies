// services/api.js
const API_KEY = "d1bdee7054b384d2fe928d6a0cdc1ec3";
const BASE_URL = "https://api.themoviedb.org/3";

// Fetch popular movies
export async function getPopularMovies() {
  try {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json(); // ✅ define data
    return data.results;
  } catch (err) {
    console.error("Error fetching popular movies:", err);
    throw err;
  }
}

// Example search function
export async function searchMovies(query) {
  try {
    const res = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    return data.results;
  } catch (err) {
    console.error("Error searching movies:", err);
    throw err;
  }
}
