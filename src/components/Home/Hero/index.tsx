import styles from "./hero.module.css";

import RotatingWords from '@/components/RotatingWords';
import Header from '@/components/Header';
import Button from "@/components/Button";
import { Github } from "lucide-react";

const HomeHero: React.FC = () => {
  return <div className={styles.hero}>
    <Header mode="transparent" />

    <div className={styles.content}>
      <div className={styles.about}>
        <div className={styles.title}>
          <div className={styles.titleStatic}>Play on</div>
          <RotatingWords className={styles.instrumentSection} words={["Pro Guitar", "Pro Drums", "Vocal", "Keys", "Guitar", "Bass"]} intervalTime={2500} />
        </div>

        <div className={styles.buttons}>
          <Button color="blue">
            Download
          </Button>

          <Button>
            <Github />
            Check our Repository
          </Button>
        </div>
      </div>

      <div className={styles.video}>

      <iframe
        src={"https://www.youtube.com/embed/HuIqMeEZrmE"}
        title="YARG Setlist: Wave 3 Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

        <div className={styles.gem} data-color="green"></div>
        <div className={styles.gem} data-color="blue"></div>

        <div className={styles.featureCard} data-position="left">
          <div className={styles.featureTitle}>Song Formats</div>
          <div className={styles.featureDescription}>.chart / .mid / CON files</div>
        </div>

        <div className={styles.featureCard} data-position="top">
          <div className={styles.featureTitle}>Vocals</div>
          <div className={styles.featureDescription}>Full solo and harmonies support, play with the full band experience</div>
        </div>
      </div>
    </div>

  </div>;
}

export default HomeHero;