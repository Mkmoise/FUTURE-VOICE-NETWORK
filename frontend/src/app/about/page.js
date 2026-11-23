
import styles from "./page.module.css";

export const metadata = {
  title: "About Us",
  description:
    "Discover the people, purpose and commitment behind Future Voice Network.",
};

export default function AboutPage() {
  return (
    <>
      {/* About Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.eyebrow}>GET TO KNOW US</span>

          <h1>
            Young minds. Shared purpose.
            <span> A future built through education.</span>
          </h1>

          <p>
            We came together because we believe every young person
            deserves an opportunity to access education and pursue
            a better future.
          </p>

          <div className={styles.heroLine}>
            <span />
            Education · Opportunity · Community
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className={`section ${styles.story}`}>
        <div className={`container ${styles.storyGrid}`}>
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>OUR STORY</span>
            <h2>Where our journey began.</h2>
            <span className={styles.headingLine} />
          </div>

          <div className={styles.storyText}>
            <p>
              Future Voice Network is a group of young men and women
              studying at universities who came together with a shared
              goal: to develop solutions to the educational challenges
              facing their community.
            </p>

            <p>
              They recognised a problem that has affected, and continues
              to affect, young Banyamulenge people throughout their
              academic journeys. Among the challenges are the lack of
              financial resources to pay school fees and limited
              awareness within the community about the importance
              of education.
            </p>

            <p>
              These are some of the challenges Future Voice Network is
              committed to addressing. We believe that by working
              together, raising awareness and creating educational
              opportunities, we can help more young Banyamulenge people
              access and continue their education.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className={styles.purpose}>
        <div className={`container ${styles.purposeContent}`}>
          <div className={styles.purposeHeading}>
            <span className={styles.eyebrow}>OUR PURPOSE</span>
            <h2>What brings us together.</h2>
            <p>
              Our commitment is rooted in the belief that education
              should be accessible and that young people can contribute
              to meaningful change in their communities.
            </p>
          </div>

          <div className={styles.purposeGrid}>
            <article className={styles.purposeCard}>
              <span className={styles.cardNumber}>01</span>
              <h3>Our Mission</h3>
              <p>
                To support Banyamulenge students in accessing and
                continuing their education.
              </p>
              <span className={styles.cardAccent} />
            </article>

            <article className={styles.purposeCard}>
              <span className={styles.cardNumber}>02</span>
              <h3>Our Vision</h3>
              <p>
                A future where young Banyamulenge people have greater
                opportunities to pursue education and contribute
                positively to their communities.
              </p>
              <span className={styles.cardAccent} />
            </article>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className={`section ${styles.values}`}>
        <div className="container">
          <div className={styles.valuesHeading}>
            <span className={styles.eyebrow}>WHAT GUIDES US</span>
            <h2>The values behind our purpose.</h2>
            <p>
              The principles that shape our commitment to education
              and community.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            <article className={styles.valueCard}>
              <span>01</span>
              <h3>Education</h3>
              <p>
                We believe education creates possibilities and opens
                doors to a better future.
              </p>
            </article>

            <article className={styles.valueCard}>
              <span>02</span>
              <h3>Unity</h3>
              <p>
                We believe meaningful progress begins when people
                work together towards a shared purpose.
              </p>
            </article>

            <article className={styles.valueCard}>
              <span>03</span>
              <h3>Opportunity</h3>
              <p>
                We believe young people deserve opportunities to
                discover their potential and move forward.
              </p>
            </article>

            <article className={styles.valueCard}>
              <span>04</span>
              <h3>Community</h3>
              <p>
                We believe supporting students contributes to
                stronger communities and brighter futures.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className={styles.closing}>
        <div className={`container ${styles.closingContent}`}>
          <div>
            <span className={styles.eyebrow}>OUR SHARED PURPOSE</span>
            <h2>Every educational journey deserves a chance.</h2>
            <p>
              Join us in supporting educational opportunities for
              young Banyamulenge people.
            </p>
          </div>

          <a href="/get-involved" className={styles.closingButton}>
            Get Involved
          </a>
        </div>
      </section>
    </>
  );
}
