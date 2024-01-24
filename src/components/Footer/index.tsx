import React from 'react';
import styles from "./footer.module.css";
import { Discord, Github, Instagram, Reddit, TikTok, Twitch, X, Youtube } from '@/assets/Icons';
import YARGLogo from "@/assets/YARGLogo.svg";
import { getContributors } from '@/utils/contributors';

const Footer: React.FC = async () => {
    const contributors = await getContributors();

  return <footer className={styles.footer}>

    <div className={styles.information}>
        <div className={styles.about}>
            <YARGLogo className={styles.logo}/>

            <div className={styles.description}>
                Yet Another Rhythm Game inspired by beloved classics, delivering an immersive fret rhythm experience.
            </div>
            <div className={styles.contributors}>
                Made with a lot of love by { contributors.length } contributors
            </div>
        </div>

        <div className={styles.navigation}>
            <div className={styles.column}>
                <div className={styles.title}>Game</div>
                <ul>
                    {/* <li>Features</li> */}
                    <a href="https://github.com/YARC-Official/YARC-Launcher/releases/latest">
                        <li>Download</li>
                    </a>
                    {/* <li>Setlist</li> */}
                </ul>
            </div>

            <div className={styles.column}>
                <div className={styles.title}>Community</div>
                <ul>
                    {/* <li>News</li> */}
                    <a href="https://docs.yarg.in/">
                        <li>Documentation</li>
                    </a>
                </ul>
            </div>

            <div className={styles.column}>
                <div className={styles.title}>Development</div>
                <ul>
                    <a href="https://github.com/YARC-Official/YARG-BleedingEdge">
                        <li>Nightly Builds</li>
                    </a>

                    {/* <li>Contributors</li> */}

                    <a href="https://yarg.youtrack.cloud/issues">
                        <li>Roadmap</li>
                    </a>
                </ul>
            </div>
        </div>
    </div>

    <div className={styles.copyright}>
        <div className={styles.company}>
            <div className={styles.link}>YARC</div>
            {/* <div className={styles.link}>Terms</div>
            <div className={styles.link}>Privacy</div>
            <div className={styles.link}>Cookies</div> */}
        </div>

        <div className={styles.socials}>
            <a href="https://discord.gg/sqpu4R552r" aria-label="YARG's discord" target="_blank">
                <Discord />
            </a>
            <a href="https://github.com/YARC-Official" aria-label="Github Organization" target="_blank">
                <Github />
            </a>
            <a href="https://x.com/yarggame" aria-label="YARG's Twitter" target="_blank">
                <X />
            </a>
            <a href="https://www.youtube.com/@YARGGame" aria-label="YARG's Youtube Channel" target="_blank">
                <Youtube />
            </a>
            <a href="https://www.reddit.com/r/yarg/" aria-label="YARG's subreddit" target="_blank">
                <Reddit />
            </a>
            <a href="https://www.twitch.tv/yarggame" aria-label="YARG's Twitch Channel" target="_blank">
                <Twitch />
            </a>
            <a href="https://www.instagram.com/yarg.game" aria-label="YARG's Instagram" target="_blank">
                <Instagram />
            </a>
            <a href="https://www.tiktok.com/@yarggame" aria-label="YARG's Tiktok" target="_blank">
                <TikTok />
            </a>
        </div>
    </div>

  </footer>;
}

export default Footer;