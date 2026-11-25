import styles from "./page.module.css";
import Image from "next/image";

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
          <div className={styles.heroText}>
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

          <div className={styles.heroImage}>
            <Image
              src="/logos/fvn-about.jpeg"
              alt="Future Voice Network members"
              width={900}
              height={650}
              priority
              className={styles.aboutImage}
            />
          </div>
        </div>
      </section>

      {/* About Hero 
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
      </section>  */}

      {/* Our Story */}
      <section className={`section ${styles.story}`}>
        <div
          className={`container ${styles.storyGrid}`}
          style={{ rowGap: "45px" }}
        >
          {/* First heading — left column */}
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>OUR STORY</span>
            <h2>Where our journey began.</h2>
            <span className={styles.headingLine} />
          </div>

          {/* First paragraphs — right column */}
          <div className={styles.storyText}>
            <p>
              Future Voice Network was established on 23 August 2025 by
              refugee students studying at different universities in Kenya.
              The founders came together after recognizing the educational
              challenges facing young refugees and the limited access,
              encouragement and guidance available to many of them. What
              began as an initiative among students from one refugee
              community later grew to welcome refugees from different
              countries, strengthening its commitment to unity,
              collaboration and shared progress through education.
            </p>

            <p>
              They recognised a problem that has affected, and continues
              to affect, young refugee students throughout their
              academic journeys. Among the challenges are the lack of
              financial resources to pay school fees and limited
              awareness within the community about the importance
              of education.
            </p>

            <p>
              These are some of the challenges Future Voice Network is
              committed to addressing. We believe that by working
              together, raising awareness and creating educational
              opportunities, we can help more young refugee students
              access and continue their education.
            </p>
          </div>

          {/* Second heading — left column */}
          <div className={styles.sectionHeading}>
            <h2>Why We Were Established.</h2>
            <span className={styles.headingLine} />
          </div>

          {/* Second paragraphs — right column */}
          <div className={styles.storyText}>
            <p>
              The organization was created in response to the educational
              gaps and barriers experienced within refugee communities.
              The founders recognized that many young refugees have the
              ability and ambition to pursue higher education, yet some
              have come to believe that university education is beyond
              their reach. Future Voice Network seeks to challenge this
              mindset, encourage young people to aim higher and help them
              access the information, guidance and support needed to
              continue their education.
            </p>

            <p>
              Our work is guided by the belief that education can
              transform individual lives and strengthen entire
              communities. We therefore aim not only to support learners
              academically, but also to inspire a lasting change in how
              young refugees view education and their own potential.
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
                <ol>
                  <li>To inspire young refugees to pursue higher education and believe in their academic potential.</li>
                  <li>To provide academic counselling, mentorship and information about educational opportunities.</li>
                  <li>To strengthen learning through holiday tuition and other academic support initiatives.</li>
                  <li>To organize conferences, discussions and educational sessions that address challenges affecting refugee youths.</li>
                  <li>To promote unity, collaboration and peer support among refugee students from different backgrounds.</li>
                  <li>To build partnerships that can expand access to scholarships and other educational opportunities.</li>
                </ol>
              </p>
              <span className={styles.cardAccent} />
            </article>

            <article className={styles.purposeCard}>
              <span className={styles.cardNumber}>02</span>
              <h3>Our Vision</h3>
              <p>
                A future where young refugee students have greater
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
              young refugee students.
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
