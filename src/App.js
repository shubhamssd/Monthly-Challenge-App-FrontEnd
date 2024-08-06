import { useEffect, useState } from "react";
import "./App.css";
import ChallengeList from "./components/ChallengeList";
import axios from "axios";
import AddChallenge from "./components/AddChallenge";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [challenges, setChallenges] = useState([
    { id: 1, month: "January", description: "First Challenge Description" },
    { id: 2, month: "Febuary", description: "Second Challenge Description" },
  ]);

  useEffect(() => {
    fetchChallenges();
  }, []);

  const fetchChallenges = async () => {
    // useEffect are used to get data from outside world or fetch in application .
    try {
      const response = await axios.get("http://localhost:8080/challenges"); ///here we get the url
      setChallenges(response.data);
    } catch (error) {
      console.error("Error Fetching Challenges: ", error);
    }
  };

  const handleChallengeAdded = () => {
    fetchChallenges();
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Monthly Challenges</h1>
      <AddChallenge onChallengeAdded={handleChallengeAdded} />
      <ChallengeList challenges={challenges} />
    </div>
  );
}

export default App;
