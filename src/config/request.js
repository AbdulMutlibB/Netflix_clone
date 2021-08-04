const API_KEY = "de1828f994f7750dd771a64be9139f1d"

const request ={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOrignals:`/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMoives:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMoives:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMoives:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}
export default request;



























// https://api.themoviedb.org/3/movie/550?api_key=de1828f994f7750dd771a64be9139f1d