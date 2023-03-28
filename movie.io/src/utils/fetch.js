export async function getTrendingMovies(time){
      const getData = await fetch(`https://api.themoviedb.org/3/trending/all/${time}?api_key=1f6e5570daa6e6e95be98ebf55ce428a`)
      const data = await getData.json()
      return data.results
}
export async function getNewMovies(status){
  const getData = await fetch(`https://api.themoviedb.org/3/movie/${status}?api_key=1f6e5570daa6e6e95be98ebf55ce428a&page=2`)
  const data = await getData.json()
  return data.results
}
export async function getPopularMovies(status){
  const getData = await fetch(`https://api.themoviedb.org/3/movie/${status}?api_key=1f6e5570daa6e6e95be98ebf55ce428a`)
  const data = await getData.json()
  return data.results
}
export async function getDetailMovies(id,media){
  const getData = await fetch(`https://api.themoviedb.org/3/${media}/${id}?api_key=1f6e5570daa6e6e95be98ebf55ce428a`)
  const data = await getData.json()
  return data
}
export async function searchMovie(query){
  const getData = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=1f6e5570daa6e6e95be98ebf55ce428a&query=${query}&include_adult=false`)
  const data = await getData.json()
  return data.results
}