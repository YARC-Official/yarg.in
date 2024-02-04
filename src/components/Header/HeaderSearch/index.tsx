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
    <div>
      <input
        className={styles.search}
        type="text"
        placeholder="Search for a post, user, band, song..."
        value={value}
        onChange={(event) => handleChange(event.target.value)}
        onKeyDown={({ key }) => handleKeyPress(key)}
      />
    </div>
  );
};

export default HeaderSearch;
