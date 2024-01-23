import styles from "./button.module.css";

type ButtonColor = "white" | "blue";

type Props = {
    children?: React.ReactNode;
    color?: ButtonColor;
}

const Button: React.FC<Props> = ({
  children,
  color = "white",
}) => {
  return <div data-color={color} className={styles.button}>
    {children}
  </div>;
}

export default Button;