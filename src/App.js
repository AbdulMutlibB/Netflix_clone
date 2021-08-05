import "./App.css";
import Row from "./Row";
import request from "./config/request";
import Banner from './Banner'

function App() {
  return (
    <div className="app">
      <Banner/>
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
