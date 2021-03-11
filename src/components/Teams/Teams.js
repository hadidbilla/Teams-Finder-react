import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Team.css";

const Teams = (props) => {
  const { strTeam, strTeamBadge, idTeam } = props.team;
  return (
    <div className="mb-3 col-md-6 col-lg-4 col-sm-6">
      <div
        className="card mt-5 pt-3 ml-auto mr-auto "
        style={{ width: " 18rem" }}
      >
        <div className="d-flex justify-content-center">
          <img
            style={{
              height: "130px",
              width: "130px",
            }}
            src={strTeamBadge}
            alt=""
            srcset=""
          />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">{strTeam}</h5>
          <p className="card-text">Sports type: Football</p>
          <Link to={`/team/${idTeam}`}>
            <button className="glow-on-hover">
              Explore
              <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Teams;
