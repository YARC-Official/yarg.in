import { NEWS_IMAGES_URL } from "@/utils/constants";
import styles from "./author.module.css";
import Image from "next/image";

type Props = {
    displayName: string,
    avatar?: string,
    role?: string,
}

const Author: React.FC<Props> = ({ displayName, avatar, role }) => {
    return <div className={styles.author}>
        <div className={styles.avatar}>
            <Image src={`${NEWS_IMAGES_URL}/avatars/${avatar}`} alt={`${displayName}'s avatar`} width={48} height={48} />
        </div>
        <div className={styles.info}>
            <div className={styles.name}>{ displayName }</div>
            <div className={styles.role}>{ role }</div>
        </div>
    </div>;
}

export default Author;