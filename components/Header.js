import Image from "next/image";
import styles from "../styles/Header.module.css";
import MeOilPaint from "../public/me-oilpaintsmile.jpg";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.name}> Jeff Kealy.</div>
      <div className={styles.content}>
        <Image className={styles.img} src={MeOilPaint} />
        <div className={styles.about}>
          <p>
            I'm Jeff. <br></br>I'm a software developer and designer from Minneapolis, MN.
          </p>

          <p>
            <span className={styles.title}>Development</span>
            JavaScript : jQuery : ReactJS : AngularJS : PHP : WordPress : HTML5 : CSS3 : SCSS : Angular Material : Express : Node.js : Bootstrap : MongoDB : SQL
          </p>

          <p>
            <span className={styles.title}>Design</span>
            Adobe Photoshop : Adobe Illustrator : Adobe Premiere Pro : Adobe After Effects : Adobe Animate : Adobe Audition : FL Studio
          </p>
          <p>I'm a learner, a doer, and have a strong connection with developing community.</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
