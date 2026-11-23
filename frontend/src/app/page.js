
import Image from "next/image";
import styles from "./page.module.css";

const programmes = [
  {
    number: "01",
    title: "Financial Support",
    description:
      "Helping students access financial support that can make continuing their education possible.",
  },
  {
    number: "02",
    title: "Mentorship",
    description:
      "Connecting students with guidance and encouragement as they navigate their educational journeys.",
  },
  {
    number: "03",
    title: "Educational Opportunities",
    description:
      "Helping students discover opportunities that can open doors to further education and growth.",
  },
  {
    number: "04",
    title: "Career Development",
    description:
      "Encouraging students to explore their abilities, develop skills and prepare for their futures.",
  },
];

function Home() {
  return (
    <>
      <section id="home" className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <span className={styles.eyebrow}>
              EDUCATION · OPPORTUNITY · POSSIBILITY
            </span>

            <h1>
              Every student deserves a chance to
              <span> move forward.</span>
            </h1>

            <p>
              We support Banyamulenge students in accessing and continuing
              their education through financial support, mentorship and
              educational opportunities.
            </p>

            <div className={styles.heroActions}>
              <a href="#about" className={styles.primaryButton}>
                Discover Our Mission
              </a>
              <a href="#programmes" className={styles.secondaryButton}>
                Explore Programmes
              </a>
            </div>

            <div className={styles.heroNote}>
              <span className={styles.goldLine}></span>
              Building opportunities through education.
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualCard}>
              <div className={styles.visualCircle}>
                <Image
                  src="/logos/fvn-logo.png"
                  alt="FVN emblem"
                  width={180}
                  height={180}
                  className={styles.heroLogo}
                />
              </div>
              <span className={styles.visualLabel}>
                FUTURE VOICE NETWORK
              </span>
              <h2>Opening doors through education.</h2>
              <span className={styles.visualAccent}></span>
            </div>
            <div className={styles.decorativeShape}></div>
          </div>
        </div>
      </section>

      <section id="about" className={`section ${styles.about}`}>
        <div className={`container ${styles.aboutContent}`}>
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>WHO WE ARE</span>
            <h2>Education should create possibilities, not barriers.</h2>
          </div>

          <div className={styles.aboutText}>
            <p>
              Future Voice Network is committed to supporting Banyamulenge
              students in accessing and continuing their education.
            </p>
            <p>
              We believe that access to education, guidance and meaningful
              opportunities can help students build stronger futures for
              themselves and their communities.
            </p>
          </div>
        </div>
      </section>

      <section id="programmes" className={`section ${styles.programmes}`}>
        <div className="container">
          <div className={styles.programmeHeading}>
            <span className={styles.eyebrow}>WHAT WE DO</span>
            <h2>Creating pathways to opportunity.</h2>
            <p>
              Our areas of focus are designed to help students progress in
              education and prepare for the future.
            </p>
          </div>

          <div className={styles.programmeGrid}>
            {programmes.map((programme) => (
              <article
                className={styles.programmeCard}
                key={programme.number}
              >
                <span className={styles.programmeNumber}>
                  {programme.number}
                </span>
                <h3>{programme.title}</h3>
                <p>{programme.description}</p>
                <span className={styles.cardAccent}></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="get-involved" className={styles.involved}>
        <div className={`container ${styles.involvedContent}`}>
          <div>
            <span className={styles.eyebrow}>BE PART OF THE CHANGE</span>
            <h2>Education moves forward when we move together.</h2>
            <p>
              Whether through mentorship, partnership, volunteering or
              support, there is a place for people who believe in educational
              opportunity.
            </p>
          </div>

          <a href="/get-involved" className={styles.involvedButton}>
            Get Involved
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
