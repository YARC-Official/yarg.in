import styles from './tag.module.css';

export type TagColor = "blue" | "green" | "yellow" | "purple" | "red" | "pink";

type Props = {
    children?: React.ReactNode;
    color?: TagColor;
}

const Tag: React.FC<Props> = ({ children, color }) => {
    return <div className={styles.tag} data-color={color}>
        {children}
    </div>;
}

export default Tag;