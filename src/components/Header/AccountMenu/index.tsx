import AvatarPlaceholder from "@/assets/Images/Avatar.jpg";
import { Menu } from "lucide-react";
import Image from "next/image";
import styles from "./account-menu.module.css";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Props = {
  username?: string;
  avatar?: StaticImport | string
}

const usernamePlaceholder = "Kadoodle"

const AccountMenu: React.FC<Props> = ({ username = usernamePlaceholder, avatar = AvatarPlaceholder }) => {
  return ( 
    <section className={styles.container} >
      <Menu className={styles.icon} />
      <p className={styles.greeting}>
        Hey, <span>{username}</span>
      </p>
      <Image className={styles.avatar} src={avatar} alt="Avatar" />
    </section>
  );
};

export default AccountMenu;