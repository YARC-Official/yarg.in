import React from 'react';
import YARGLogo from "@/assets/YARGLogo.svg";
import styles from "./header.module.css";
import Link from 'next/link';

export type HeaderMode = "dark" | "transparent";

type Props = {
    mode?: HeaderMode;
    children?: React.ReactNode;
    className?: string,
}

const Header: React.FC<Props> = ({
    mode = "dark",
    children,
    className,
}: Props) => {

    return <div className={[styles.header, className].join(" ")}>
        <header data-mode={mode} className={styles.bar}>
            <Link href={"/"}>
                <YARGLogo className={styles.logo} />
            </Link>
            <Navigation />
        </header>

        { children }
    </div>
}

function Navigation() {
    return (<>
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
    </>);
}

export default Header;