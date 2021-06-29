import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobs/Berlin")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="App">
      <h1>Jobzzzzzzzzzzzzzzzzzzzz</h1>
      {jobs.length &&
        jobs.map((job) => (
          <div key={job._id}>
            <h2>
              <strong>{job.salary}€ per day easy</strong>
            </h2>
            <p>{job.title}</p>
          </div>
        ))}
    </div>
  );
}

export default App;