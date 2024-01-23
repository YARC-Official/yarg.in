import React from 'react';
import styles from "./header.module.css";

export type HeaderMode = "dark" | "transparent";

type Props = {
    mode?: HeaderMode;
}

const Header: React.FC<Props> = ({
    mode = "dark"
}: Props) => {

    return <header data-mode={mode} className={styles.header}>
        {/* <Logo className={styles.logo} /> */}

        <ul>
            <li>Features</li>
            <li>Downloads</li>
            <li>Roadmap</li>
            <li>Community</li>
            <li>News</li>
        </ul>

    </header>;
}

export default Header;