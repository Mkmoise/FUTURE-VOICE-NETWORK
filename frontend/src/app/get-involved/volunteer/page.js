
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Volunteer With Us | Future Voice Network",
  description:
    "Join Future Voice Network as a volunteer and contribute to expanding educational opportunities for young refugees.",
};

const volunteerAreas = [
  {
    number: "01",
    title: "Academic Support",
    description:
      "Help learners strengthen their knowledge through tutoring, learning activities and academic guidance.",
  },
  {
    number: "02",
    title: "Mentorship",
    description:
      "Share your experiences, encourage young people and help them think confidently about their educational future.",
  },
  {
    number: "03",
    title: "Events and Activities",
    description:
      "Support the planning and coordination of conferences, youth forums and educational activities.",
  },
  {
    number: "04",
    title: "Communication and Digital Support",
    description:
      "Contribute skills in writing, graphic design, social media, photography, website development or other digital areas.",
  },
];

export default function VolunteerPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>GET INVOLVED</span>
          <h1>
            Your time and skills can help open doors through education.
          </h1>
          <p>
            Join a growing network of people who believe that every young
            refugee deserves the opportunity to learn, grow and pursue a
            brighter future.
          </p>
          <a href="#volunteer-areas" className={styles.heroButton}>
            Explore volunteer opportunities
            <span aria-hidden="true"> →</span>
          </a>
        </div>
      </section>

      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div>
              <span className={styles.sectionLabel}>VOLUNTEER WITH US</span>
              <h2>Be part of something meaningful.</h2>
            </div>

            <div className={styles.introText}>
              <p>
                At Future Voice Network, we believe educational transformation
                is a shared responsibility. It takes people who are willing to
                give their time, knowledge and skills to help young people
                recognise their potential and pursue their ambitions.
              </p>
              <p>
                Whether you are a student, professional, educator or someone
                with a skill to share, there may be a place for you in our
                journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className={styles.areas}
        id="volunteer-areas"
      >
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionLabel}>HOW YOU CAN CONTRIBUTE</span>
            <h2>Bring your skills. Make a difference.</h2>
            <p>
              Here are some of the areas where volunteers can contribute to
              our mission.
            </p>
          </div>

          <div className={styles.areasGrid}>
            {volunteerAreas.map((area) => (
              <article className={styles.areaCard} key={area.number}>
                <span className={styles.areaNumber}>{area.number}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.welcome}>
        <div className={styles.container}>
          <div className={styles.welcomeContent}>
            <span className={styles.sectionLabel}>WHO CAN VOLUNTEER?</span>
            <h2>There is room for different experiences and abilities.</h2>
            <p>
              We welcome people who are passionate about education and
              supporting young refugees. You do not need to have a long
              professional background. A willingness to learn, contribute and
              work with others is a valuable starting point.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.closing}>
        <div className={styles.container}>
          <div className={styles.closingContent}>
            <span className={styles.sectionLabel}>TAKE THE NEXT STEP</span>
            <h2>Interested in volunteering?</h2>
            <p>
              We would love to hear from people who want to contribute to
              educational opportunities for young refugees. Get in touch with
              our team to express your interest.
            </p>

            <p className={styles.contactNote}>
              Volunteer enquiries will be handled through our official contact
              channel once it is available.
            </p>

            <Link href="/get-involved" className={styles.backLink}>
              <span aria-hidden="true">←</span> Back to Get Involved
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
