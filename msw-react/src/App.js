import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/2")
      .then((res) => setData(res.data));
  }, []);
  console.log("asdfasdfasdfasdfasdfasdf", data);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <code>{JSON.stringify(data)}</code>{" "}
      </header>
    </div>
  );
}

export default App;
