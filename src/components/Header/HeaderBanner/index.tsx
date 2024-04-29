import { Twitch } from "@/assets/Icons";
import { AlertTriangle, LucideIcon, Megaphone } from "lucide-react";
import React from "react";
import styles from "./header-banner.module.css";

type BannerType = "announcement" | "warning" | "live";

type Props = {
  type: BannerType;
  href?: string;
  message: string;
  onClick?: () => void;
};

const bannerTypes: Record<BannerType, { icon: LucideIcon, style: string }> = {
  announcement: {
    icon: Megaphone,
    style: styles.announcement
  },
  warning: {
    icon: AlertTriangle,
    style: styles.warning
  },
  live: {
    icon: Twitch,
    style: styles.live
  },
}

const HeaderBanner: React.FC<Props> = ({ type, href, message, onClick }) => {
  const { icon: Icon, style } = bannerTypes[type]

  return (
    <div className={[styles.banner, style].join(" ")} onClick={onClick} role="button">
     <Icon className={styles.icon} /><a href={href} target="_blank">{message} Click here to know more.</a>
    </div>
  );
};

export default HeaderBanner;