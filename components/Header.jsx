import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.topWrapper}>
      <h1 className={styles.pageHeading}>My Profile</h1>
      <h2 className={styles.subHeading}>Christian Lupian</h2>
    </div>
  );
}
