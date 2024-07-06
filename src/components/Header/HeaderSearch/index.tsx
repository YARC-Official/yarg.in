import { Search } from "lucide-react";
import styles from "./header-search.module.css";

type Props = {
  value: string;
  handleChange: (value: string) => void;
  handleConfirm: () => void;
}

const HeaderSearch: React.FC<Props> = ({ value, handleChange, handleConfirm }) => {

  const handleKeyPress = (key: string) => {
    if (key === 'Enter') handleConfirm();
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.search}
        type="text"
        placeholder="Search for a post, user, band, song..."
        value={value}
        onChange={(event) => handleChange(event.target.value)}
        onKeyDown={({ key }) => handleKeyPress(key)}
      />
      <Search className={styles.icon} role="button" onClick={handleConfirm} />
    </div>
  );
};

export default HeaderSearch;
