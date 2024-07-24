'use client'

import React from "react";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
  DiscAlbum,
  Flag,
  Gauge,
  Globe,
  Guitar,
  Home,
  Library,
  Settings,
  User,
  Users
} from "lucide-react";

import styles from "./style.module.css";
import SideBarHeader from "./SideBarHeader";
import SideBarBanner from "./SideBarBanner";
import SideBarThemeSelector from "./SideBarThemeSelector";
import SideBarLanguage from "./SideBarLanguage";
import SidebarNavigation from "./SidebarNavigation";

const navigation = [
  {
    separator: false,
    items: [
      {
        href: "/home",
        name: "Home",
        icon: Home
      },
      {
        href: "/community",
        name: "Community",
        icon: Globe,
      },
      {
        href: "/dashboard",
        name: "Dashboard",
        icon: Gauge,
      }
    ]
  },
  {
    header: "Leaderboards",
    separator: true,
    items: [
      {
        href: "/player",
        name: "Player",
        icon: User
      },
      {
        href: "/band",
        name: "Band",
        icon: Users,
      },
      {
        href: "/instrument",
        name: "Instrument",
        icon: Guitar,
      },
      {
        href: "/country",
        name: "Country",
        icon: Flag,
      },
      {
        href: "/setlist",
        name: "Setlist",
        icon: Library,
      },
      {
        href: "/source",
        name: "Source",
        icon: DiscAlbum,
      }
    ]
  },
  {
    separator: true,
    items: [
      {
        href: "/settings",
        name: "Settings",
        icon: Settings
      }
    ]
  }
];

const languages = [
  { name: "English", acronym: "en"},
  { name: "Português", acronym: "pt"}
];

const release = {
  image: "https://news.yarg.in/images/banners/v0-12-release.webp",
  target: "#!",
  text: "New release 0.12" 
};

const version = "v0.12.0"

const SideBar: React.FC = () => {
  const { push } = useRouter();
  const { has } = useSearchParams();
  const isClose = has('closed');
  const pathname = usePathname();

  const handleToggle = () => 
    push(`${pathname}${isClose ? "?" : "?closed"}`);
  
  return (
    <div className={styles.sidebar} aria-expanded={!isClose}>
      {isClose ? <SideBarHeader.Close /> : <SideBarHeader.Open tag={version} onClose={handleToggle}/>}
      <SidebarNavigation navigation={navigation} isClose={isClose} onToggle={handleToggle} />
      {isClose ? (
        <div className={styles.controls}>
          <SideBarLanguage.Button>EN</SideBarLanguage.Button>
        </div>
      ) : (
        <>
          <SideBarBanner release={release} />
          <div className={styles.controls}>
            <SideBarLanguage.Select>
              {languages.map(({acronym, name}) => <option key={acronym}>{name}</option>)}
            </SideBarLanguage.Select>
            <SideBarThemeSelector />
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;