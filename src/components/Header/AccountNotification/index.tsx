import { LucideIcon } from "lucide-react";
import styles from "./account-notification.module.css";

type Props = {
  icon: LucideIcon;
  notificationQuantity: number;
};

const AccountNotification: React.FC<Props> = ({ icon: Icon, notificationQuantity }) => {
  return ( 
    <div className={styles.container} >
      <Icon className={styles.icon} /> {notificationQuantity > 0 ? notificationQuantity : null}
    </div>
  );
};

export default AccountNotification;