import Image from "next/image";
import styles from "../styles/Header.module.css";
import MeOilPaint from "../public/me-oilpaintsmile.jpg";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.name}> Jeff Kealy.</div>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={MeOilPaint} />
          <span className={styles.imJeff}>
            I'm Jeff. <br></br>I'm a software developer and designer from Minneapolis, MN.
            <br /> <br />
            I'm a learner, a doer, and have a strong connection with developing community.
          </span>
        </div>

        <div className={styles.about}>
          <p>
            <span className={styles.imJeff}>
              I'm Jeff. <br></br>I'm a software developer and designer from Minneapolis, MN.
              <br /> <br />
              I'm a learner, a doer, and have a strong connection with developing community.
            </span>
          </p>

          <p>
            <span className={styles.title}>Development</span>
            JavaScript : jQuery : ReactJS : AngularJS : PHP : WordPress : HTML5 : CSS3 : SCSS : Angular Material : Express : Node.js : Bootstrap : MongoDB : SQL
          </p>

          <p>
            <span className={styles.title}>Design</span>
            Adobe Photoshop : Adobe Illustrator : Adobe Premiere Pro : Adobe After Effects : Adobe Animate : Adobe Audition : FL Studio
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
