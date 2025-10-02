import styles from "../styles/ProfileCard.module.css";

export default function ProfileCard() {
  return (
    <section className={styles.profileBox}>
      <img
        src="pfp.png"
        alt="Profile Avatar"
        className={styles.avatar}
      />
      <h2 className={styles.fullName}>Christian Lupian</h2>
      <p className={styles.infoAge}>Age: 19</p>
      <p className={styles.infoText}>I love hiking because it challenges me physically, clears my mind, and inspires me to keep improving myself every step of the way.</p>
    </section>
  );
}
