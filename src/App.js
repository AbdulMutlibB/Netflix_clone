import "./App.css";
import Row from "./Row";
import request from "./config/request";
function App() {
  return (
    <div className="App">
      <h1 className="app_h1">HI guys you know what time it is :)</h1>
      <Row title="NETFLIX ORIGNALS" isLargerRow={true} fetchUrl={request.fetchNetflixOrignals}   />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMoives} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMoives} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMoives} />
    </div>
  );
}

export default App;
