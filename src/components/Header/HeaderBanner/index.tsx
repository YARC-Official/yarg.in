import { AlertTriangle, Megaphone } from "lucide-react";
import styles from "./header-banner.module.css";
import { Twitch } from "@/assets/Icons";
import React from "react";

type Props = {
  href?: string;
  message: string;
  onClick?: () => void;
};

const WarningBanner: React.FC<Props> = ({ href, message, onClick }) => {
  return (
    <div className={[styles.banner, styles.warning].join(" ")} onClick={onClick} role="button">
     <AlertTriangle className={styles.icon} /><a href={href} target="_blank">{message} Click here to know more.</a>
    </div>
  );
};

const AnnouncementBanner: React.FC<Props> = ({ href, message, onClick }) => {
  return (
    <div className={[styles.banner, styles.announcement].join(" ")} onClick={onClick} role="button">
     <Megaphone className={styles.icon} /><a href={href} target="_blank">{message} Click here to know more.</a>
    </div>
  );
};

const LiveBanner: React.FC<Props> = ({ href, message, onClick }) => {
  return (
    <div className={[styles.banner, styles.live].join(" ")} onClick={onClick} role="button">
     <Twitch className={styles.icon} /><a href={href} target="_blank">{message} Click here to know more.</a>
    </div>
  );
};

const HeaderBanner = {
  Warning: WarningBanner,
  Announcement: AnnouncementBanner,
  Live: LiveBanner
};

export default HeaderBanner;