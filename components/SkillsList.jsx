import styles from "../styles/SkillsList.module.css";

export default function SkillsList() {
  const mySkills = ["Arduino", "C++", "Java"];

  return (
    <section className={styles.skillSection}>
      <h3 className={styles.skillTitle}>Core Skills</h3>
      <ul className={styles.skillList}>
        {mySkills.map((item, idx) => (
          <li key={idx} className={styles.skillItem}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
