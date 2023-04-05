import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Grid } from "@mui/material";
const About = () => {
  return (
    <Grid className=" d-flex align-items-center justify-content-center flex-column w-100 mt-5 text-center">
      <div width="500px" className=" shadow-lg p-3 mb-5 bg-white rounded ">
        <div className="">
          <img
            width="200px"
            src="data:image/png;base64,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"
            alt=""
          />

          <h1 className="display-2">Clarusway</h1>
          <h2 className="">Full Stack Team</h2>
        </div>

        <div className="display-1">
          <div>
            <a className="link-success " href="https://clarusway.com/">
              {<LinkedInIcon className="fa-lg" />}
            </a>
            <a className="link-danger" href="https://clarusway.com/">
              {<TwitterIcon />}
            </a>
            <a className="link-primary" href="https://clarusway.com/">
              {<InstagramIcon />}
            </a>
            <a className="link-dark" href="https://clarusway.com/">
              {<YouTubeIcon />}
            </a>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default About;
