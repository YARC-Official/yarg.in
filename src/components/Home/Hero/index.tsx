import styles from "./hero.module.css";

import RotatingWords from "@/components/RotatingWords";
import Header from "@/components/Header";
import Button from "@/components/Button";
import { Discord } from "@/assets/Icons";
import { Package } from "lucide-react";

const HomeHero: React.FC = () => {
  return (
    <Header className={styles.hero} mode="transparent">
      <div className={styles.content}>
        <div className={styles.about}>
          <div className={styles.title}>
            <div className={styles.titleStatic}>Play on</div>
            <RotatingWords
              className={styles.instrumentSection}
              words={[
                "Harmonies",
                "Pro Drums",
                "Vocals",
                "Keys",
                "Guitar",
                "Bass",
              ]}
              intervalTime={2500}
            />
          </div>

          <div className={styles.buttons}>
            <a href="https://github.com/YARC-Official/YARC-Launcher/releases/latest">
              <Button color="blue">
                <Package />
                Download
              </Button>
            </a>

            <a href="https://discord.gg/sqpu4R552r" target="_blank">
              <Button>
                <Discord />
                Join our community
              </Button>
            </a>
          </div>
        </div>

        <div className={styles.video}>
          <iframe
            src={"https://www.youtube.com/embed/8IZ_f-BtcLk"}
            title="YARG Setlist: Wave 8 Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          <div className={styles.gem} data-color="green"></div>
          <div className={styles.gem} data-color="blue"></div>

          <div className={styles.featureCard} data-position="left">
            <div className={styles.featureTitle}>Lots of Formats</div>
            <div className={styles.featureDescription}>
              .chart / .mid / .sng / CON
            </div>
          </div>

          <div className={styles.featureCard} data-position="top">
            <div className={styles.featureTitle}>Vocals</div>
            <div className={styles.featureDescription}>
              Full solo and harmonies support, play with the full band
              experience
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default HomeHero;
