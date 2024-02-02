import React from "react";
import Link from "next/link";
import YARGLogoFull from "@/assets/YARGLogo.svg";
import YARGLogoMin from "@/assets/YARGLogoMin.svg";
import styles from "./sidebar-header.module.css";
import { ArrowLeftFromLine } from "lucide-react";

type Props = {
  tag: string  
  onClose: () => void;
};

const SideBarHeaderOpen: React.FC<Props> = ({ tag, onClose }) => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.linkOpen}>
        <YARGLogoFull className={styles.logoFull} />
      </Link>
      <span className={styles.tag}>{tag}</span>
      <div className={styles.space}/>
      <button className={styles.collapse} onClick={onClose}>
        <ArrowLeftFromLine />
      </button>
    </header>
  );
};


const SideBarHeaderClose: React.FC = () => {
  return (
    <Link href="/" className={styles.linkClose}>
      <YARGLogoMin className={styles.logoMin} />
    </Link>
  );
};

const SideBarHeader = {
  Open: SideBarHeaderOpen,
  Close: SideBarHeaderClose
};

export default SideBarHeader;
