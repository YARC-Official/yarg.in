import React from 'react';
import YARGLogo from "@/assets/YARGLogo.svg";
import styles from "./header.module.css";

export type HeaderMode = "dark" | "transparent";

type Props = {
    mode?: HeaderMode;
}

const Header: React.FC<Props> = ({
    mode = "dark"
}: Props) => {

    return <header data-mode={mode} className={styles.header}>
        <YARGLogo className={styles.logo} />
        <ul>

        {/* 
            TO-DO: These pages still not developed.
            <li>Features</li>
            <li>Downloads</li>
            <li>Community</li>
            <li>News</li>
        */}


            <a href="https://yarg.youtrack.cloud/issues" target="_blank">
                <li>Roadmap</li>
            </a>

            <a href="https://docs.yarg.in/" target="_blank">
                <li>Documentation</li>
            </a>
        </ul> 

    </header>;
}

export default Header;