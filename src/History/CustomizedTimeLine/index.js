import * as React from "react";
import { useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import baby from "../../profilePictures/baby.jpg";
import { useTranslation, withTranslation } from "react-i18next";
import { compose } from "redux";
import "./style.css";

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

const TimelineEvent = ({
  date,
  title,
  description,
  icon: Icon,
  iconColor,
  link,
  modalContent,
  hoverColor,
  className,
}) => {
  const [hovered, setHovered] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);

  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        align="right"
        variant="body2"
        color="text.secondary"
        fontWeight={hovered ? "600" : "0"}
        style={{ color: hovered ? hoverColor : "" }}
      >
        {date}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <a href={link}>
          <TimelineDot
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => modalContent && setModalStatus(true)}
            className={className}
            color={iconColor}
            style={{ cursor: "pointer" }}
          >
            <Icon className={className} />
          </TimelineDot>
        </a>
        {modalContent && (
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={modalStatus}
            onClose={() => setModalStatus(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={modalStatus}>
              <Box sx={style}>{modalContent}</Box>
            </Fade>
          </Modal>
        )}
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <Typography
          fontSize={14}
          fontWeight={hovered ? "600" : "0"}
          className={hovered ? `${className}Description` : ""}
          style={{ color: hovered ? hoverColor : "" }}
        >
          {title}
        </Typography>
        <Typography
          fontSize={12}
          fontStyle="italic"
          fontWeight={hovered ? "600" : "0"}
          className={hovered ? `${className}Description` : ""}
          style={{ color: hovered ? hoverColor : "" }}
        >
          {description}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

const CustomizedTimeLine = () => {
  const { t } = useTranslation("common");

  return (
    <Timeline position="alternate">
      <TimelineEvent
        date={t("history.birthDate")}
        title={t("history.birthPlace")}
        description={t("history.birthDescription")}
        icon={ChildFriendlyIcon}
        iconColor="warning"
        hoverColor="rgb(236, 95, 13)"
        className="iconChildhood"
        modalContent={
          <div style={{ textAlign: "center" }}>
            <img id="baby" src={baby} alt="Baby" />
          </div>
        }
      />
      <TimelineEvent
        date={t("history.primarySchoolDate")}
        title={t("history.primarySchool")}
        description={t("history.primarySchoolDescription")}
        icon={SchoolIcon}
        iconColor="error"
        hoverColor="rgb(226, 7, 7)"
        className="iconCompulsorySchool"
        link="https://www.icmolinovecchio.edu.it"
      />
      <TimelineEvent
        date={t("history.middleSchoolDate")}
        title={t("history.middleSchool")}
        description={t("history.middleSchoolDescription")}
        icon={SchoolIcon}
        iconColor="error"
        hoverColor="rgb(226, 7, 7)"
        className="iconCompulsorySchool"
        link="https://www.icmolinovecchio.edu.it"
      />
      <TimelineEvent
        date={t("history.highSchoolDate")}
        title={t("history.highSchool")}
        description={t("history.highSchoolDescription")}
        icon={SchoolIcon}
        iconColor="error"
        hoverColor="rgb(226, 7, 7)"
        className="iconCompulsorySchool"
        link="https://itspasolini.edu.it/it/"
      />
      <TimelineEvent
        date={t("history.bachelorDate")}
        title={t("history.bachelor")}
        description={t("history.bachelorDescription")}
        icon={SchoolIcon}
        iconColor="primary"
        hoverColor="rgb(52, 81, 214)"
        className="icon"
        link="https://www.unimi.it/it/corsi/corsi-di-laurea/informatica-la-comunicazione-digitale"
      />
      <TimelineEvent
        date={t("history.erasmusDate")}
        title={t("history.erasmus")}
        description={t("history.erasmusDescription")}
        icon={FlightTakeoffIcon}
        iconColor="success"
        hoverColor="rgb(26, 116, 8)"
        className="iconErasmus"
        link="https://www.fib.upc.edu/en"
      />
      <TimelineEvent
        date={t("history.masterDate")}
        title={t("history.master")}
        description={t("history.masterDescription")}
        icon={SchoolIcon}
        iconColor="primary"
        hoverColor="rgb(52, 81, 214)"
        className="icon"
        link="https://www.unimi.it/it/corsi/corsi-di-laurea/informatica-magistrale"
      />
      <TimelineEvent
        date={t("history.juniorDataEngineerDate")}
        title={t("history.juniorDataEngineer")}
        description={t("history.juniorDataEngineerDescription")}
        icon={WorkIcon}
        iconColor="secondary"
        hoverColor="rgb(170, 8, 143)"
        className="iconQuantycaJob"
        link="https://www.quantyca.it"
      />
      <TimelineEvent
        date={t("history.dataEngineerDate")}
        title={t("history.dataEngineer")}
        description={t("history.dataEngineerDescription")}
        icon={WorkIcon}
        iconColor="secondary"
        hoverColor="rgb(170, 8, 143)"
        className="iconQuantycaJob"
        link="https://www.quantyca.it"
      />
      <TimelineEvent
        date={t("history.fullStackSoftwareEngineerDate")}
        title={t("history.fullStackSoftwareEngineer")}
        description={t("history.fullStackSoftwareEngineerDescription")}
        icon={WorkIcon}
        iconColor="success"
        hoverColor="rgb(26, 116, 8)"
        className="iconTheForkJob"
        link="https://www.thefork.it"
      />
      <TimelineEvent
        date={t("history.fullStackSoftwareEngineerIIDate")}
        title={t("history.fullStackSoftwareEngineerII")}
        description={t("history.fullStackSoftwareEngineerIIDescription")}
        icon={WorkIcon}
        iconColor="success"
        hoverColor="rgb(26, 116, 8)"
        className="iconTheForkJob"
        link="https://www.thefork.it"
      />
    </Timeline>
  );
};

export default compose(withTranslation("common"))(CustomizedTimeLine);
