import ClickSpark from "../ui/clickspark";
import Noise from "../ui/noise";
import styles from "./style.module.scss";

export default function Certifications() {
  return (
    // <ClickSpark
    //   sparkColor="#fff"
    //   sparkSize={10}
    //   sparkRadius={15}
    //   sparkCount={8}
    //   duration={400}
    // >
    <section className={styles.certifications}>
      <div className={styles.mainContainer}>
        <div className={styles.content}>
          <p className={styles.subheading}>
            Earned with dedication and consistency
          </p>
          <h1 className={styles.heading}>Certifications</h1>

          <div className={styles.list}>
            <div className={styles.card}>
              <p className={styles.desc}>
                Certified AI Engineer – OpenAI, 2025
              </p>
              <h2 className={styles.title}>AI Specialist</h2>

              {/* Hover preview */}
              <div className={styles.preview}>
                <img src="./test.png" alt="Certificate" />
              </div>
            </div>

            <hr />
            <div className={styles.card}>
              <p className={styles.desc}>
                Certified AI Engineer – OpenAI, 2025
              </p>
              <h2 className={styles.title}>AI Specialist</h2>

              {/* Hover preview */}
              <div className={styles.preview}>
                <img src="./test.png" alt="Certificate" />
              </div>
            </div>

            <hr />
            <div className={styles.card}>
              <p className={styles.desc}>
                Certified AI Engineer – OpenAI, 2025
              </p>
              <h2 className={styles.title}>AI Specialist</h2>

              {/* Hover preview */}
              <div className={styles.preview}>
                <img src="./test.png" alt="Certificate" />
              </div>
            </div>

            <hr />
            <div className={styles.card}>
              <p className={styles.desc}>
                Certified AI Engineer – OpenAI, 2025
              </p>
              <h2 className={styles.title}>AI Specialist</h2>

              {/* Hover preview */}
              <div className={styles.preview}>
                <img src="./test.png" alt="Certificate" />
              </div>
            </div>

            <hr />

            <div className={styles.card}>
              <p className={styles.desc}>MERN Fullstack Developer – 2024</p>
              <h2 className={styles.title}>Fullstack Pro</h2>

              <div className={styles.preview}>
                <img src="./test.png" alt="Certificate" />
              </div>
            </div>
          </div>
        </div>
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={15}
      />
      </div>
    </section>
    // </ClickSpark>
  );
}
