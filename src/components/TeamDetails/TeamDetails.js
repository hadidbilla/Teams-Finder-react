import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./TeamDetails.css";
import male from "../../Photo/male.png";
import female from "../../Photo/female.png";
import found from "../../Icon/found.png";
import flag from "../../Icon/flag.png";
import football from "../../Icon/football.png";
import gender from "../../Icon/male-gender-sign.png";
import facebook from "../../Icon/Facebook.png";
import twitter from "../../Icon/Twitter.png";
import youTube from "../../Icon/YouTube.png";

const TeamDetails = () => {
  const { teamId } = useParams();
  const [selectedTeam, setSelectedTeam] = useState({});
  const {
    strFacebook,
    strYoutube,
    strTwitter,
    strGender,
    strCountry,
    strTeam,
    strDescriptionEN,
    strStadiumDescription,
    strTeamLogo,
    intFormedYear,
  } = selectedTeam;
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setSelectedTeam(data.teams[0]));
  }, []);
  return (
    <div className="top">
      <div className="background-img">
        <div className="img">
          <img className="img-fluid" src={strTeamLogo} alt="" srcset="" />
        </div>
      </div>
      <div className=" team-header pt-3">
        <div className="container">
          <div className="team-info d-flex justify-content-between row">
            <div className="left pt-4 cold-sm-12 col-md-6 col-lg-6">
              <h2>{strTeam}</h2>
              <p style={{ fontWeight: "bold" }}>
                <img
                  style={{ height: "24px", width: "24px", marginRight: "5px" }}
                  src={found}
                  alt=""
                />
                Founded: {intFormedYear}
              </p>
              <p style={{ fontWeight: "bold" }}>
                <img
                  style={{ height: "24px", width: "24px", marginRight: "5px" }}
                  src={flag}
                  alt=""
                />
                Country: {strCountry}
              </p>
              <p style={{ fontWeight: "bold" }}>
                <img
                  style={{ height: "24px", width: "24px", marginRight: "5px" }}
                  src={football}
                  alt=""
                />
                Sport Type: Football
              </p>
              <p style={{ fontWeight: "bold" }}>
                <img
                  style={{ height: "24px", width: "24px", marginRight: "5px" }}
                  src={gender}
                  alt=""
                />
                Gender: {strGender}
              </p>
            </div>
            <div className="right col-sm-12 col-md-6 col-lg-6">
              {strGender === "female" ? (
                <img className="img-fluid" src={female} alt="" srcset="" />
              ) : (
                <img className="img-fluid" src={male} alt="" srcset="" />
              )}
            </div>
          </div>
          <div className="mt-5">
            <p style={{ color: "white" }} className="text-justify">
              {strDescriptionEN}{" "}
            </p>
            <br />
            <p
              style={{ color: "white", margin: "0px" }}
              className="text-justify pb-3"
            >
              {strStadiumDescription}
            </p>
            <div className="social-icon d-flex justify-content-center py-5">
              <div className="">
                <a href={`https://${strTwitter}`} target="blank">
                  <img
                    style={{ height: "65px", width: "65px" }}
                    src={twitter}
                    alt=""
                    srcset=""
                  />
                </a>
              </div>
              <div className="">
                <a href={`https://${strFacebook}`} target="blank">
                  <img
                    style={{ height: "65px", width: "65px" }}
                    src={facebook}
                    alt=""
                    srcset=""
                  />
                </a>
              </div>
              <div className="">
                <a href={`https://${strYoutube}`} target="blank">
                  <img
                    style={{ height: "65px", width: "65px" }}
                    src={youTube}
                    alt=""
                    srcset=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
