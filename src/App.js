import "./App.css";
import requests from "./requests";
import api from "./api";
import Row from "./components/Row";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner axios={api} requests={requests} />
      {Object.keys(requests).map((e) => {
        return (
          <Row
            title={e}
            poster={e === "Originals" ? true : false}
            fetchUrl={requests[e]}
            axios={api}
          />
        );
      })}
    </div>
  );
}

export default App;
