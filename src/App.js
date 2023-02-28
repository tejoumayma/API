import "./App.css";
import UserList from "./UserList";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [listOfUSer, setlistOfUSer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const getList = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(res.data);
      setIsLoading(false);
      setlistOfUSer(res.data);
    } catch (err) {
      setIsLoading(false);
      console.log("error: ", err.message);
      setError(err.message);
    }
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <div className="App">
      <h1
        style={{ color: "#B0526A", textAlign: "center", fontStyle: "oblique" }}
      >
        Users list
      </h1>
      <UserList isLoading={isLoading} error={error} list={listOfUSer} />
    </div>
  );
}

export default App;
