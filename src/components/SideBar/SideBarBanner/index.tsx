import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./style.module.css";

type Release = {
  target: string;
  image: string;
  text: string;
};

type Props = {
  release?: Release;
};

const SideBarBanner: React.FC<Props> = ({ release }) => {
  if (!release) return null;
  return (
    <div className={styles.banner}>
      <Link href={release.target}>
        <Image src={release.image} alt={release.text} width={296} height={110} />
      </Link>
    </div>
  );
};

export default SideBarBanner;
