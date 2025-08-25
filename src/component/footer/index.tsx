import Noise from "../ui/noise";
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
    <h2>University Teaching Assistant</h2>
    <p className={styles.Cname}>Vellore Institute of Technology</p>
    <div className={styles.keypoints}>
          <p>
      collaborated with the course instructor to enhance the learning experience for Students
    </p>
    <p>
      Conducted weekly tutoring sessions to support students in understanding deep learning condepts.
    </p>

    </div>
  </div>
  <div className={styles.expCard}>
    <h2>Project Intern</h2>
    <p className={styles.Cname}>Dabur India Ltd.</p>
    <div className={styles.keypoints}>
          <p>Developed a basic ML-based for Dabur Products</p>
    <p>
      Conducted sentiment analysis on customer reviews using support vector Machines (SVM)
    </p>
    <p>
      Provided actionable insights to the marketing team based on sentiment trends
    </p>
    </div>
  </div>
</div>

        </div>
        <div className={styles.lower}>

                <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={15}
      />
        </div>
      </div>
    </section>
  );
}
