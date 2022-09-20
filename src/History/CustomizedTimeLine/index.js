import * as React from "react";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import baby from "../../profilePictures/baby.jpg";
import "./style.css";
import { useTranslation, withTranslation } from "react-i18next";
import { compose } from "redux";

const CustomizedTimeLine = () => {
  const { t, i18n } = useTranslation("common");
  const [hoveredChild, setHoveredChild] = useState(false);
  const [hoveredPrimarySchool, setHoveredPrimarySchool] = useState(false);
  const [hoveredMiddleSchool, setHoveredMiddleSchool] = useState(false);
  const [hoveredHighSchool, setHoveredHighSchool] = useState(false);
  const [hoveredBachelor, setHoveredBachelor] = useState(false);
  const [hoveredErasmus, setHoveredErasmus] = useState(false);
  const [hoveredMaster, setHoveredMaster] = useState(false);
  const [hoveredFirstJob, setHoveredFirstJob] = useState(false);
  const [hoveredSecondJob, setHoveredSecondJob] = useState(false);
  const [hoveredCurrentJob, setHoveredCurrentJob] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "65%",
    height: "fit-content%",
    padding: "2%",
    bgcolor: "#181b20",
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.3)",
    outline: "none",
    color: "white",
  };

  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
          fontWeight={hoveredChild ? "600" : "0"}
          style={{ color: hoveredChild ? "rgb(236, 95, 13)" : "" }}
        >
          {t("history.birthDate")}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot
            style={{ cursor: "pointer" }}
            onMouseEnter={() => setHoveredChild(true)}
            onMouseLeave={() => setHoveredChild(false)}
            onClick={() => {
              setModalStatus(true);
            }}
            className="iconChildhood"
            color="warning"
          >
            <ChildFriendlyIcon className="iconChildhood" />
          </TimelineDot>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={modalStatus}
            onClose={() => {
              setModalStatus(false);
            }}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={modalStatus}>
              <Box sx={style}>
                <div style={{ textAlign: "center" }}>
                  <img id="baby" src={baby} alt="Baby" />
                </div>
              </Box>
            </Fade>
          </Modal>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            fontWeight={hoveredChild ? "600" : "0"}
            className={hoveredChild ? "childDescription" : ""}
          >
            {t("history.birthPlace")}
          </Typography>
          <Typography
            fontWeight={hoveredChild ? "600" : "0"}
            className={hoveredChild ? "childDescription" : ""}
          >
            {t("history.birthDescription")}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
          fontWeight={hoveredPrimarySchool ? "600" : "0"}
          style={{ color: hoveredPrimarySchool ? "rgb(226, 7, 7)" : "" }}
        >
          {t("history.primarySchoolDate")}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <a href="https://www.icmolinovecchio.edu.it">
            <TimelineDot
              onMouseEnter={() => setHoveredPrimarySchool(true)}
              onMouseLeave={() => setHoveredPrimarySchool(false)}
              className="iconCompulsorySchool"
              color="error"
            >
              <SchoolIcon />
            </TimelineDot>
          </a>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            fontWeight={hoveredPrimarySchool ? "600" : "0"}
            className={hoveredPrimarySchool ? "primarySchoolDescription" : ""}
          >
            {t("history.primarySchool")}
          </Typography>
          <Typography
            fontWeight={hoveredPrimarySchool ? "600" : "0"}
            className={hoveredPrimarySchool ? "primarySchoolDescription" : ""}
          >
            {t("history.primarySchoolDescription")}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
          fontWeight={hoveredMiddleSchool ? "600" : "0"}
          style={{ color: hoveredMiddleSchool ? "rgb(226, 7, 7)" : "" }}
        >
          {t("history.middleSchoolDate")}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <a href="https://www.icmolinovecchio.edu.it">
            <TimelineDot
              onMouseEnter={() => setHoveredMiddleSchool(true)}
              onMouseLeave={() => setHoveredMiddleSchool(false)}
              className="iconCompulsorySchool"
              color="error"
            >
              <SchoolIcon />
            </TimelineDot>
          </a>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            fontWeight={hoveredMiddleSchool ? "600" : "0"}
            className={hoveredMiddleSchool ? "middleSchoolDescription" : ""}
          >
            {t("history.middleSchool")}
          </Typography>
          <Typography
            fontWeight={hoveredMiddleSchool ? "600" : "0"}
            className={hoveredMiddleSchool ? "middleSchoolDescription" : ""}
          >
            {t("history.middleSchoolDescription")}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
          style={{ color: hoveredHighSchool ? "rgb(226, 7, 7)" : "" }}
          fontWeight={hoveredHighSchool ? "600" : "0"}
        >
          {t("history.highSchoolDate")}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <a href="https://itspasolini.edu.it/it/">
            <TimelineDot
              onMouseEnter={() => setHoveredHighSchool(true)}
              onMouseLeave={() => setHoveredHighSchool(false)}
              className="iconCompulsorySchool"
              color="error"
            >
              <SchoolIcon />
            </TimelineDot>
          </a>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            fontWeight={hoveredHighSchool ? "600" : "0"}
            className={hoveredHighSchool ? "highSchoolDescription" : ""}
          >
            {t("history.highSchool")}
          </Typography>
          <Typography
            fontWeight={hoveredHighSchool ? "600" : "0"}
            className={hoveredHighSchool ? "highSchoolDescription" : ""}
          >
            {t("history.highSchoolDescription")}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
          fontWeight={hoveredBachelor ? "600" : "0"}
          style={{ color: hoveredBachelor ? "rgb(52, 81, 214)" : "" }}
        >
          {t("history.bachelorDate")}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <a href="https://www.unimi.it/it/corsi/corsi-di-laurea/informatica-la-comunicazione-digitale">
            <TimelineDot
              onMouseEnter={() => setHoveredBachelor(true)}
              onMouseLeave={() => setHoveredBachelor(false)}
              className="icon"
              color="primary"
            >
              <SchoolIcon />
            </TimelineDot>
          </a>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            fontWeight={hoveredBachelor ? "600" : "0"}
            className={hoveredBachelor ? "bachelorDescription" : ""}
          >
            {t("history.bachelor")}
          </Typography>
          <Typography
            fontWeight={hoveredBachelor ? "600" : "0"}
            className={hoveredBachelor ? "bachelorDescription" : ""}
          >
            {t("history.bachelorDescription")}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
          fontWeight={hoveredErasmus ? "600" : "0"}
          style={{ color: hoveredErasmus ? "rgb(26, 116, 8)" : "" }}
        >
          {t("history.erasmusDate")}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <a href="https://www.fib.upc.edu/en">
            <TimelineDot
              onMouseEnter={() => setHoveredErasmus(true)}
              onMouseLeave={() => setHoveredErasmus(false)}
              className="iconErasmus"
              color="success"
            >
              <FlightTakeoffIcon className="iconErasmus" />
            </TimelineDot>
          </a>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            fontWeight={hoveredErasmus ? "600" : "0"}
            className={hoveredErasmus ? "erasmusDescription" : ""}
          >
            {t("history.erasmus")}
          </Typography>
          <Typography
            fontWeight={hoveredErasmus ? "600" : "0"}
            className={hoveredErasmus ? "erasmusDescription" : ""}
          >
            {t("history.erasmusDescription")}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
          fontWeight={hoveredMaster ? "600" : "0"}
          style={{ color: hoveredMaster ? "rgb(52, 81, 214)" : "" }}
        >
          {t("history.masterDate")}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <a href="https://www.unimi.it/it/corsi/corsi-di-laurea/informatica-magistrale">
            <TimelineDot
              onMouseEnter={() => setHoveredMaster(true)}
              onMouseLeave={() => setHoveredMaster(false)}
              className="icon"
              color="primary"
            >
              <SchoolIcon />
            </TimelineDot>
          </a>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            fontWeight={hoveredMaster ? "600" : "0"}
            className={hoveredMaster ? "masterDescription" : ""}
          >
            {t("history.master")}
          </Typography>
          <Typography
            fontWeight={hoveredMaster ? "600" : "0"}
            className={hoveredMaster ? "masterDescription" : ""}
          >
            {t("history.masterDescription")}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
          fontWeight={hoveredFirstJob ? "600" : "0"}
          style={{ color: hoveredFirstJob ? "rgb(170, 8, 143)" : "" }}
        >
          {t("history.juniorDataEngineerDate")}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <a href="https://www.quantyca.it">
            <TimelineDot
              onMouseEnter={() => setHoveredFirstJob(true)}
              onMouseLeave={() => setHoveredFirstJob(false)}
              className="iconQuantycaJob"
              color="secondary"
            >
              <WorkIcon className="iconQuantycaJob" />
            </TimelineDot>
          </a>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            fontWeight={hoveredFirstJob ? "600" : "0"}
            className={hoveredFirstJob ? "quantycaJobDescription" : ""}
          >
            {t("history.juniorDataEngineer")}
          </Typography>
          <Typography
            fontWeight={hoveredFirstJob ? "600" : "0"}
            className={hoveredFirstJob ? "quantycaJobDescription" : ""}
          >
            {t("history.juniorDataEngineerDescription")}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
          fontWeight={hoveredSecondJob ? "600" : "0"}
          style={{ color: hoveredSecondJob ? "rgb(170, 8, 143)" : "" }}
        >
          {t("history.dataEngineerDate")}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <a href="https://www.quantyca.it">
            <TimelineDot
              onMouseEnter={() => setHoveredSecondJob(true)}
              onMouseLeave={() => setHoveredSecondJob(false)}
              className="iconQuantycaJob"
              color="secondary"
            >
              <WorkIcon className="iconQuantycaJob" />
            </TimelineDot>
          </a>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            fontWeight={hoveredSecondJob ? "600" : "0"}
            className={hoveredSecondJob ? "quantycaJobDescription" : ""}
          >
            {t("history.dataEngineer")}
          </Typography>
          <Typography
            fontWeight={hoveredSecondJob ? "600" : "0"}
            className={hoveredSecondJob ? "quantycaJobDescription" : ""}
          >
            {t("history.dataEngineerDescription")}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
          fontWeight={hoveredCurrentJob ? "600" : "0"}
          style={{ color: hoveredCurrentJob ? "rgb(26, 116, 8)" : "" }}
        >
          {t("history.fullStackSoftwareEngineerDate")}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <a href="https://www.thefork.it">
            <TimelineDot
              onMouseEnter={() => setHoveredCurrentJob(true)}
              onMouseLeave={() => setHoveredCurrentJob(false)}
              className="iconTheForkJob"
              color="success"
            >
              <WorkIcon className="iconTheForkJob" />
            </TimelineDot>
          </a>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            fontWeight={hoveredCurrentJob ? "600" : "0"}
            className={hoveredCurrentJob ? "theForkJobDescription" : ""}
          >
            {t("history.fullStackSoftwareEngineer")}
          </Typography>
          <Typography
            fontWeight={hoveredCurrentJob ? "600" : "0"}
            className={hoveredCurrentJob ? "theForkJobDescription" : ""}
          >
            {t("history.fullStackSoftwareEngineerDescription")}
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default compose(withTranslation("common"))(CustomizedTimeLine);
