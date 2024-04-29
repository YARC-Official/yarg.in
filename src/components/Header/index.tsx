'use client'

import { Bell, Users } from "lucide-react";
import React, { useState } from "react";
import AccountMenu from "./AccountMenu";
import AccountNotification from "./AccountNotification";
import HeaderBanner from "./HeaderBanner";
import NavItem from "./HeaderNavItem";
import HeaderSearch from "./HeaderSearch";
import styles from "./header.module.css";
import avatarMock from '@/assets/Images/Avatar.jpg';

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

const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  // Temporary mocks
  const isLogged = true;
  const mockedTwitchBannerHref = "https://www.twitch.tv/eliteasian123";
  const mockedTwitchBannerMessage = "EliteAsian123 is LIVE on Twitch! Working on Engine rewrite";

  const handleSearchConfirm = () => {
    // do something on confirm
    console.log(searchValue);
  };

  return (
    <header className={styles.header} >
      <HeaderBanner type="live" message={mockedTwitchBannerMessage} href={mockedTwitchBannerHref} />
      
      <div className={styles.bar}>
        <HeaderSearch value={searchValue} handleChange={setSearchValue} handleConfirm={handleSearchConfirm} />
        <Navigation />
        {isLogged ? <LoggedInComponents /> : null}
      </div>
    </header>
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
      <AccountMenu username={"Kadoodle"} avatar={avatarMock} />
    </>
  );
};

export default Header;
