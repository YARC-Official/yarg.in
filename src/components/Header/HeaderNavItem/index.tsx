import { usePathname } from "next/navigation";
import { HTMLAttributeAnchorTarget } from "react";
import styles from "./header-nav-item.module.css";

type Props = {
  label: string;
  href: string;
  target?: HTMLAttributeAnchorTarget;
};

const NavItem: React.FC<Props> = ({ label, href, target = "_self" }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <a href={href} target={target} className={isActive ? styles.active : styles.default}>
      {label}
    </a>
  );
};

export default NavItem;