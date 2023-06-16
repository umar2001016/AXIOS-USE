import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"

const App = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  // using Promises
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setMyData(response.data))
      .catch((error) => setIsError(error.message));
  }, []);

//plz subscribe to thapa technical
  return (
    <div className="App">
      <h1 className="App-logo">Axios Tutorial</h1>
      {isError !== "" && <h2>{isError}</h2>}

      <div className="App-header">
        {myData.slice(0, 9).map((post) => {
          const { body, id, title } = post;
          return (
            <div key={id} className="card">
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              <p>{body.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
