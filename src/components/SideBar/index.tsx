"use client"
import React, { useState } from 'react'
import YARGLogo from "@/assets/YARGLogo.svg";
import styles from "./sidebar.module.css";
import { ArrowLeftFromLine, ArrowRightFromLine, ChevronDown, Dice1, DiscAlbum, Flag, Gauge, Globe, Guitar, Home, Library, Moon, Settings, User, Users } from 'lucide-react'
import Image from 'next/image';
import YargIconModal from '@/assets/YargModalIconLogo.svg'

const SideBar = () => {
    const [activeItem, setActiveItem] = useState(0);
    const [modal, setModal] = useState(false);

    const handleClick = (i: any) => {
        setActiveItem(i);
    };

    return (
        <div className={`${!modal ? styles.container : styles.container_closed}`}>
            <div className={`${!modal ? styles.box_logo : styles.box_logo_closed}`}>
                {
                    !modal ? (
                        <div>
                            <YARGLogo className={styles.logo} />
                            <span className={styles.span_version}>v0.12.0</span>
                        </div>
                    ) : (
                        <div className={styles.yarg_icon_modal}>
                            <YargIconModal />
                        </div>
                    )
                }
                <button onClick={() => setModal(!false)}>
                    <ArrowLeftFromLine size={18} />
                </button>
            </div>
            <div className={`${!modal ? styles.box_list : styles.modal}`}>
                <button
                    className={`${!modal ? styles.button_open_list : styles.button_closed_list}`}
                    onClick={() => setModal(!!false)}
                >
                    <ArrowRightFromLine />
                </button>
                <ul className={`${!modal ? '' : styles.borde_botton_closed}`}>
                    <li
                        className={`${activeItem === 0 ? styles.active : ''}`}
                        onClick={() => handleClick(0)}
                    >
                        <Home /> <p>Home</p></li>
                    <li
                        className={`${activeItem === 1 ? styles.active : ''}`}
                        onClick={() => handleClick(1)}
                    ><Globe /> <p>Community</p></li>
                    <li
                        className={`${activeItem === 2 ? styles.active : ''}`}
                        onClick={() => handleClick(2)}
                    ><Gauge /><p>Dashboard</p></li>

                    <span />
                </ul>
                <ul className={`${!modal ? styles.box_list_subtitle : styles.box_list_subtitle_closed}`}>
                    <p>LEADERBOARDS</p>

                    <li
                        className={`${activeItem === 3 ? styles.active : ''}`}
                        onClick={() => handleClick(3)}
                    ><User /> <p>Player</p></li>
                    <li
                        className={`${activeItem === 4 ? styles.active : ''}`}
                        onClick={() => handleClick(4)}
                    ><Users /><p>Band</p></li>
                    <li
                        className={`${activeItem === 5 ? styles.active : ''}`}
                        onClick={() => handleClick(5)}
                    ><Guitar /> <p>Instrument</p></li>
                    <li
                        className={`${activeItem === 6 ? styles.active : ''}`}
                        onClick={() => handleClick(6)}
                    ><Flag /> <p>Country</p></li>
                    <li
                        className={`${activeItem === 7 ? styles.active : ''}`}
                        onClick={() => handleClick(7)}
                    ><Library /> <p>Setlist</p></li>
                    <li
                        className={`${activeItem === 8 ? styles.active : ''}`}
                        onClick={() => handleClick(8)}
                    ><DiscAlbum /> <p>Source</p></li>
                    <span />
                    <li
                        className={`${activeItem === 9 ? styles.active : ''}`}
                        onClick={() => handleClick(9)}
                    ><Settings /> <p>Settings</p></li>
                </ul>
                <div className={`${!modal ? styles.box_release : styles.release_closed}`}>
                    <p>NEW RELEASE</p>
                </div>
                <div className={`${!modal ? styles.box_language : styles.language_closed}`}>
                    <div className={`${!modal ? styles.box_language_options : styles.language_options_closed}`}>
                        {
                            !modal ? <p>English</p> : <p>EN</p>
                        }
                        <span><ChevronDown /></span>
                    </div>
                    <button><Moon size={18} /></button>
                </div>
            </div>
        </div>
    )
}

export default SideBar