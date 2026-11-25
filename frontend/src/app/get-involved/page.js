
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Get Involved",
  description:
    "Discover how you can support Future Voice Network and contribute to educational opportunities for young refugees.",
};

const opportunities = [
  {
    number: "01",
    title: "Volunteer With Us",
    description:
      "Share your time, knowledge and skills to support our educational initiatives. Whether you can assist with learning activities, events or organisational work, your contribution can make a difference.",
    action: "Become a Volunteer",
    href: "/get-involved/volunteer",
  },
  {
    number: "02",
    title: "Become a Mentor",
    description:
      "Encourage and guide young refugees as they navigate their academic journeys. Share your experience, offer guidance and help students recognise their potential.",
    action: "Support a Student",
    href: "/get-involved/mentor",
  },
  {
    number: "03",
    title: "Partner With Us",
    description:
      "Work with Future Voice Network to strengthen educational opportunities for young refugees. We welcome conversations with institutions, organisations and individuals who share our commitment to education.",
    action: "Explore Partnership",
    href: "/get-involved/partnership",
  },
  {
    number: "04",
    title: "Support Education",
    description:
      "Contribute towards initiatives that help young refugees access learning support and continue their education. Every contribution towards educational progress matters.",
    action: "Support Our Work",
    href: "/get-involved/support",
  },
  {
    number: "05",
    title: "Join Our Network",
    description:
      "Connect with fellow students and young people who believe in the power of education. Be part of a growing community built on unity, encouragement and shared progress.",
    action: "Join the Network",
    href: "/get-involved/join",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.eyebrow}>GET INVOLVED</span>

          <h1>
            Be part of the change.
            <span> Help build a future through education.</span>
          </h1>

          <p>
            Meaningful change happens when people come together around a
            shared purpose. Join Future Voice Network in supporting
            educational opportunities and inspiring young refugees to
            pursue their potential.
          </p>

          <div className={styles.heroLine}>
            <span />
            Participate · Connect · Make a Difference
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className={`section ${styles.introduction}`}>
        <div className="container">
          <div className={styles.introContent}>
            <span className={styles.eyebrow}>YOUR CONTRIBUTION MATTERS</span>

            <h2>
              There is more than one way to make a difference.
            </h2>

            <p>
              Every young person deserves the opportunity to learn, grow
              and pursue a better future. Achieving this requires
              encouragement, collaboration and people willing to
              contribute in different ways.
            </p>

            <p>
              Whether you are a student, professional, organisation or
              someone who simply believes in education, there is a place
              for you to contribute to our shared purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className={styles.opportunities}>
        <div className="container">
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>WAYS TO GET INVOLVED</span>

            <h2>Find your place in our journey.</h2>

            <p>
              Explore the different ways you can contribute to
              educational progress and a stronger refugee community.
            </p>
          </div>

          <div className={styles.opportunitiesGrid}>
            {opportunities.map((opportunity) => (
              <article
                className={styles.opportunityCard}
                key={opportunity.number}
              >
                <span className={styles.cardNumber}>
                  {opportunity.number}
                </span>

                <span className={styles.cardLine} />

                <h3>{opportunity.title}</h3>

                <p>{opportunity.description}</p>

                <Link
                  href={opportunity.href}
                  className={styles.cardAction}
                >
                  {opportunity.action}
                  <span aria-hidden="true"> →</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className={styles.closing}>
        <div className={`container ${styles.closingContent}`}>
          <div>
            <span className={styles.eyebrow}>A SHARED PURPOSE</span>

            <h2>
              Together, we can open doors that once seemed out of reach.
            </h2>

            <p>
              Education creates possibilities. Your willingness to
              participate can help make those possibilities more
              accessible to young refugees.
            </p>
          </div>

          <Link href="/about" className={styles.closingButton}>
            Learn More About Us
          </Link>
        </div>
      </section>
    </>
  );
}
