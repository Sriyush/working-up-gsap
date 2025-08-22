import PixelTrail from "../ui/pixeltrails";
import styles from "./style.module.scss"
export function Footer() {
    return(
        <section className={styles.footer}>
              <PixelTrail

    gridSize={50}

    trailSize={0.1}

    maxAge={250}

    interpolate={5}

    color="#000"

    gooeyFilter={{ id: "custom-goo-filter", strength: 2 }}

  />
        </section>
    );
}