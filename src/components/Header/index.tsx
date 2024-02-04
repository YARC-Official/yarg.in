'use client'

import { Bell, Users } from "lucide-react";
import React, { useState } from "react";
import AccountMenu from "./AccountMenu";
import AccountNotification from "./AccountNotification";
import HeaderBanner from "./HeaderBanner";
import NavItem from "./HeaderNavItem";
import HeaderSearch from "./HeaderSearch";
import styles from "./header.module.css";

export type HeaderMode = "dark" | "transparent";

type Props = {
  mode?: HeaderMode;
  children?: React.ReactNode;
  className?: string;
};

const navigation = [
  {
    href: "/news",
    name: "News"
  },
  {
    href: "/features",
    name: "Features"
  },
  {
    href: "https://github.com/YARC-Official/YARC-Launcher/releases/tag/v0.3.1",
    name: "Download",
    redirect: true
  },
  {
    href: "https://yarg.youtrack.cloud/issues",
    name: "Roadmap",
    redirect: true
  },
  {
    href: "/community",
    name: "Community"
  }
];

const Header: React.FC<Props> = ({
  mode = "dark",
  children,
  className,
}: Props) => {

  const [searchValue, setSearchValue] = useState<string>("");

  // Temporary mocks
  const isLogged = false;
  const mockedBannerMessage = "Lorem ipsum dolor sit amet.";
  const mockedTwitchBannerHref = "https://www.twitch.tv/eliteasian123";
  const mockedTwitchBannerMessage = "EliteAsian123 is LIVE on Twitch! Working on Engine rewrite";

  const handleSearchConfirm = () => {
    // do something on confirm
    console.log(searchValue);
  };

  const handleBannerClick = () => {};

  return (
    <div className={[styles.header, className].join(" ")}>
      {/* <HeaderBanner.Warning message={mockedBannerMessage} /> */}
      {/* <HeaderBanner.Announcement message={mockedBannerMessage} onClick={handleBannerClick} /> */}
      {/* <HeaderBanner.Live href={mockedTwitchBannerHref} message={mockedTwitchBannerMessage} /> */}
      
      <header data-mode={mode} className={styles.bar}>
        <HeaderSearch value={searchValue} handleChange={setSearchValue} handleConfirm={handleSearchConfirm} />
        <Navigation />
        {isLogged ? <LoggedInComponents /> : null}
      </header>
      {children}
    </div>
  );
};

function Navigation() {
  return (
    <ul>  
      <NavItem label="Home" href="/" />
      {navigation.map(({ href, name, redirect }) => (
        <NavItem key={crypto.randomUUID()} href={href} label={name} target={redirect ? "_blank" : "_self"} /> 
      ))}
    </ul>
  );
};

function LoggedInComponents() {
  return (
    <>
      <AccountNotification icon={Bell} notificationQuantity={11} />
      <AccountNotification icon={Users} notificationQuantity={25} />
      <AccountMenu />
    </>
  );
};

export default Header;
