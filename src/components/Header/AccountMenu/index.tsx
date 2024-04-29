import { Menu } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import styles from "./account-menu.module.css";

type Props = {
  username: string;
  avatar: StaticImport | string
}

const AccountMenu: React.FC<Props> = ({ username, avatar }) => {
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