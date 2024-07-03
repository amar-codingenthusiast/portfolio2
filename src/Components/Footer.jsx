import React from "react";
import PropTypes from "prop-types";
import portfolioIcon from "../images/socials/portfolio.svg";
import resumeIcon from "../images/socials/resume.svg";
import gitHubIcon from "../images/socials/github.svg";
import leetcodeIcon from "../images/socials/leetcode.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import envelopeIcon from "../images/socials/envelope.svg";
import mobileIcon from "../images/socials/mobile.svg";
import addressIcon from "../images/socials/address.svg";

const Footer = (props) => {
  const {
    portfolio,
    resume,
    gitHub,
    leetcode,
    linkedIn,
    email,
    mobile,
    address,
    name,
    primaryColor,
  } = props;

  return (
    <div
      id="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.5rem",
        padding: "5rem 0 3rem",
        backgroundColor: primaryColor,
        width: "100vw",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        {portfolio && (
          <a href={portfolio} target="_blank" rel="noopener noreferrer">
            <img src={portfolioIcon} alt="Portfolio" className="socialIcon" title="portfolio" />
          </a>
        )}
        {resume && (
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <img src={resumeIcon} alt="Resume" className="socialIcon" title="resume" />
          </a>
        )}
        {gitHub && (
          <a href={gitHub} target="_blank" rel="noopener noreferrer">
            <img src={gitHubIcon} alt="GitHub" className="socialIcon" title="github" />
          </a>
        )}
        {leetcode && (
          <a href={leetcode} target="_blank" rel="noopener noreferrer">
            <img src={leetcodeIcon} alt="Leetcode" className="socialIcon" title="leetcode" />
          </a>
        )}
        {linkedIn && (
          <a href={linkedIn} target="_blank" rel="noopener noreferrer">
            <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" title="linkedin" />
          </a>
        )}
        {email && (
          <a href={email}>
            <img src={envelopeIcon} alt="email" className="socialIcon" title="email" />
          </a>
        )}
        {mobile && (
          <a href={mobile} target="_blank" rel="noopener noreferrer">
            <img src={mobileIcon} alt="Mobile" className="socialIcon" title="mobile" />
          </a>
        )}
        {address && (
          <a href={address} target="_blank" rel="noopener noreferrer">
            <img src={addressIcon} alt="Address" className="socialIcon" title="address" />
          </a>
        )}
      </div>
      <p className="small" style={{ marginTop: 0, color: "white" }}>
        Created by {name}
      </p>
    </div>
  );
};

Footer.defaultProps = {
  name: "",
};

Footer.propTypes = {
  name: PropTypes.string.isRequired,
  portfolio: PropTypes.string,
  resume: PropTypes.string,
  gitHub: PropTypes.string,
  leetcode: PropTypes.string,
  linkedIn: PropTypes.string,
  email: PropTypes.string,
  mobile: PropTypes.string,
  address: PropTypes.string,
  primaryColor: PropTypes.string,
};

export default Footer;
