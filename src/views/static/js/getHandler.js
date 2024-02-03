export async function getMoviesByCategory(category) {
  const response = await fetch(`http://localhost:3000/categories/${category}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.text();
}
//search Movie
export async function searchMovie(searchTerm) {
  const response = await fetch(`http://localhost:3000/search/${searchTerm}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.text();
}
