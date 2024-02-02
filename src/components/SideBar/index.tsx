'use client'

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from "react";
import {
  ArrowRightFromLine,
  DiscAlbum,
  Flag,
  Gauge,
  Globe,
  Guitar,
  Home,
  Library,
  Moon,
  Settings,
  Sun,
  User,
  Users
} from "lucide-react";
import { parseClassName } from "@/utils/helpers";
import SideBarHeader from "./SideBarHeader";
import styles from "./sidebar.module.css";

const navigation = [
  {
    links: [
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
    separator: "Leaderboards",
    links: [
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
    links: [
      {
        href: "/settings",
        name: "Settings",
        icon: Settings
      }
    ]
  }
]

const languages = [
  { name: "English", acronym: "en"},
  { name: "Português", acronym: "pt"}
]

const release = {
  image: "https://news.yarg.in/images/banners/v0-12-release.webp",
  target: "#!",
  text: "New release 0.12" 
}

const SideBar: React.FC = () => {
  const router = useRouter();
  const query = useSearchParams();
  const isClose = query.has('closed')
  const [theme, setTheme] = useState<'dark'|'light'>('dark')
  const pathname = usePathname()

  const handleTheme = () => setTheme((current) => current === 'dark' ? 'light': 'dark')

  const handleToggle = () => 
    router.push(`${pathname}${!isClose ? "?closed" : "?"}`)
  
  return (
    <div className={styles.sidebar} aria-expanded={!isClose}>
      {!isClose ? <SideBarHeader.Open tag="v0.12.0" onClose={handleToggle}/> : <SideBarHeader.Close />}
      <div className={styles.navigation}>
        {isClose && (
          <button type="button" className={styles.link} onClick={handleToggle}>
            <ArrowRightFromLine className={styles.icon} />
          </button>
        )}
        {navigation?.map(({separator, links}, index) => (
          <section key={index} className={styles.section}>
            {(separator && (isClose || typeof separator === 'boolean')) && <span className={styles.separator} />}
            {!isClose && typeof separator === 'string' && <span className={styles.separatorNamed}>{separator}</span>}
            {links.map(({href, icon: Icon, name}, key) => (
              <div key={key} className={parseClassName([styles.relative, pathname === href ? styles.active : ""])}>
                <Link href={`${href}${isClose ? "?closed" : ""}`} className={styles.link}>
                  <Icon className={styles.icon} absoluteStrokeWidth /> 
                  <span className={styles.name}>{name}</span>
                </Link>
              </div>
            ))}
          </section>
        ))}
      </div>
      {!isClose ? (
        <>
          <div className={styles.release}>
            {release && (
              <Link href={release.target}>
                <Image src={release.image} alt={release.text} width={296} height={110} />
              </Link>
            )}
          </div>
          <div className={styles.controls}>
            <select className={styles.select} title="Select language">
              {languages.map(({acronym, name}) => <option key={acronym}>{name}</option>)}
            </select>
            <button className={styles.buttonTheme} type="button" title="Button theme" onClick={handleTheme}>
              {theme === 'dark'? <Moon />: <Sun />}
            </button>
          </div>
        </>
      ) : (
        <div className={styles.controls}>
          <button className={styles.buttonLanguage} type="button" title="Button theme">
            EN
          </button>
        </div>
      )}
    </div>
  )
}

export default SideBar;