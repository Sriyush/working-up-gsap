import PixelTrail from "../ui/pixeltrails";
import styles from "./style.module.scss";
export function Footer() {
  return (
    <section className={styles.footer}>
      <PixelTrail
        gridSize={50}
        trailSize={0.1}
        maxAge={250}
        interpolate={5}
        color="#000000"
        gooeyFilter={{ id: "custom-goo-filter", strength: 2 }}
      />
      <div className={styles.mainContainer}>
        <div className={styles.upper}>
          <h1>
            Experience
          </h1>
<div className={styles.Experience}>
  <div className={styles.expCard}>
    <h2>Frontend Developer</h2>
    <p>FxDx • 6 months • React.js, Next.js, Zustand, Rust backend, TradingView, Web3 Casino</p>
  </div>
  <div className={styles.expCard}>
    <h2>Project: DbSynchro</h2>
    <p>Full-stack sync tool using Google API, PostgreSQL, Next.js, Docker, Sheets ↔ MySQL</p>
  </div>
</div>

        </div>
        <div className={styles.lower}></div>
      </div>
    </section>
  );
}
