import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Our Programmes",
  description:
    "Explore Future Voice Network's educational programmes supporting young refugees through guidance, learning support and educational opportunities.",
};

const programmes = [
  {
    number: "01",
    title: "Conferences and Youth Forums",
    description:
      "Gatherings where young people engage in discussions, receive guidance and learn from speakers and fellow students. These forums create opportunities to exchange ideas and discuss challenges affecting refugee youth.",
  },
  {
    number: "02",
    title: "Academic Counselling",
    description:
      "We help learners understand educational pathways, make informed academic decisions and explore opportunities for further study. Our aim is to make educational information and guidance more accessible.",
  },
  {
    number: "03",
    title: "Holiday Tuition",
    description:
      "Additional learning support during school holidays helps learners strengthen their academic knowledge and continue developing their abilities beyond the regular school term.",
  },
  {
    number: "04",
    title: "Educational Awareness and Mindset Development",
    description:
      "We encourage young refugees to challenge limiting beliefs, recognise their abilities and understand that higher education is an achievable goal worth pursuing.",
  },
  {
    number: "05",
    title: "Scholarship Support and Educational Assistance",
    description:
      "We support learners in pursuing educational opportunities that can help them continue their studies and move closer to their academic goals.",
  },
];

export default function ProgrammesPage() {
  return (
    <>
      {/* Programmes Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <span className={styles.eyebrow}>OUR PROGRAMMES</span>

            <h1>
              Creating pathways.
              <span> Opening doors through education.</span>
            </h1>

            <p>
              Through educational guidance, learning support and opportunities
              for young people to grow, Future Voice Network works towards a
              future where young refugees can pursue their academic potential.
            </p>

            <div className={styles.heroLine}>
              <span />
              Guidance · Learning · Opportunity
            </div>
          </div>

          <div className={styles.heroImage}>
            <Image
              src="/logos/fvn-programmes.jpeg"
              alt="Future Voice Network programmes"
              width={900}
              height={650}
              priority
              className={styles.programmesImage}
            />
          </div>
        </div>
      </section>
      
      {/* Programme Introduction */}
      <section className={`section ${styles.introduction}`}>
        <div className="container">
          <div className={styles.introContent}>
            <span className={styles.eyebrow}>OUR AREAS OF WORK</span>

            <h2>
              Turning our commitment to education into meaningful action.
            </h2>

            <p>
              We recognise that educational challenges cannot be addressed
              through one approach alone. That is why our work brings together
              different forms of guidance, academic support, awareness and
              educational assistance to help young refugees move forward.
            </p>
          </div>

          {/* Programme Cards */}
          <div className={styles.programmesGrid}>
            {programmes.map((programme) => (
              <article
                className={styles.programmeCard}
                key={programme.number}
              >
                <span className={styles.cardNumber}>
                  {programme.number}
                </span>

                <span className={styles.cardLine} />

                <h3>{programme.title}</h3>

                <p>{programme.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className={styles.approach}>
        <div className={`container ${styles.approachContent}`}>
          <div className={styles.approachHeading}>
            <span className={styles.eyebrow}>OUR APPROACH</span>

            <h2>Education is more than getting into a classroom.</h2>
          </div>

          <div className={styles.approachText}>
            <p>
              We believe that supporting education also means helping young
              people understand their options, develop confidence, access
              guidance and learn from one another.
            </p>

            <p>
              By bringing these areas of work together, Future Voice Network
              seeks to encourage academic progress, strengthen connections
              among refugee students and make educational opportunities more
              visible and accessible.
            </p>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className={styles.closing}>
        <div className={`container ${styles.closingContent}`}>
          <div>
            <span className={styles.eyebrow}>BE PART OF THE JOURNEY</span>

            <h2>Every young person deserves a chance to move forward.</h2>

            <p>
              Join us in supporting educational progress and building a
              stronger future through education.
            </p>
          </div>

          <Link href="/get-involved" className={styles.closingButton}>
            Get Involved
          </Link>
        </div>
      </section>
    </>
  );
}
