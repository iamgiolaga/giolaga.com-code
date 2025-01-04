import "./style.css";
import Slideshow from "../utils/Slideshow";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useTranslation, withTranslation } from "react-i18next";
import { compose } from "redux";

const Presentation = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <div id="presentationContainer">
      <p id="hello">
        {t("presentation.header")} <b>Giovanni</b> :)
      </p>
      <Slideshow />
      <div>
        <a
          className="socialLink"
          href="https://www.linkedin.com/in/giovannilagana/"
        >
          <LinkedInIcon
            style={{ width: "50px", height: "50px" }}
            className="socialIcon"
          />
        </a>
        <a className="socialLink" href="https://github.com/iamgiolaga">
          <GitHubIcon
            style={{ width: "45px", height: "45px" }}
            className="socialIcon"
          />
        </a>
        <a className="socialLink" href="https://www.youtube.com/@iamgiolaga">
          <YouTubeIcon
            style={{ width: "60px", height: "60px" }}
            className="socialIcon"
          />
        </a>
      </div>
      <div class="iframe-container">
        <iframe
          className="iframe"
          src="https://www.thelinkedinengineer.com/embed"
          width="320"
          height="210"
          style={{ borderRadius: "20px" }}
          frameborder="0"
        ></iframe>
        <span
          onClick={() =>
            (window.location.href = "https://www.thelinkedinengineer.com")
          }
          class="my-newsletter-badge"
        >
          My Newsletter
        </span>
      </div>
    </div>
  );
};

export default compose(withTranslation("common"))(Presentation);
