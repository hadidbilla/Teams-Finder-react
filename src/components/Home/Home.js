import React, { useEffect, useState } from "react";
import Teams from "../Teams/Teams";
import "./Home.css";

const Home = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setTeams(data.teams))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="background">
        <div className="gradient-text">
          <h1>Europe Football Teams Finder</h1>
        </div>
      </div>
      <div className=" team-list">
        <div className="container">
          <div className="row">
            {teams.map((team) => (
              <Teams team={team}></Teams>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
