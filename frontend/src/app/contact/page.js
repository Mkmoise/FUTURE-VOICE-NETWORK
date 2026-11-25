
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
    title: "Contact Us | Future Voice Network",
    description:
        "Get in touch with Future Voice Network for enquiries, volunteering, partnerships and educational support.",
};

const contactOptions = [
    "General Enquiry",
    "Volunteering",
    "Mentorship",
    "Partnership",
    "Educational Support",
    "Other",
];

export default function ContactPage() {
    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.eyebrow}>WE WOULD LOVE TO HEAR FROM YOU</span>
                    <h1>Let&apos;s start a conversation.</h1>
                    <p>
                        Whether you have a question, an idea, or an interest in working
                        with us, we are always glad to connect with people who believe in
                        the power of education.
                    </p>
                </div>
            </section>

            <section className={styles.contactSection}>
                <div className={styles.container}>
                    <div className={styles.contactGrid}>
                        <div className={styles.contactInfo}>
                            <span className={styles.sectionLabel}>GET IN TOUCH</span>
                            <h2>We are here to connect.</h2>
                            <p className={styles.infoIntro}>
                                Reach out to Future Voice Network. Whether you are a student,
                                parent, volunteer, potential partner or supporter, your
                                message matters to us.
                            </p>

                            {/* Contact Information */}
                            <div className={styles.contactItem}>
                                <div className={styles.contactIcon} aria-hidden="true">
                                    <span>✉</span>
                                </div>
                                <div>
                                    <h3>Email Address</h3>
                                    <a href="mailto:futurevoicenetwork@gmail.com">
                                        futurevoicenetwork@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.contactIcon} aria-hidden="true">
                                    <span>☎</span>
                                </div>
                                <div>
                                    <h3>Phone Calls</h3>
                                    <a href="tel:+254740272974">+254740272974</a>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.contactIcon} aria-hidden="true">
                                    <span>◉</span>
                                </div>
                                <div>
                                    <h3>WhatsApp</h3>
                                    <a
                                        href="https://wa.me/254782729130"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        +254782729130
                                    </a>
                                </div>
                            </div>


                            <div className={styles.infoNote}>
                                <h3>Every conversation matters.</h3>
                                <p>
                                    We believe meaningful change begins when people connect,
                                    share ideas and work together towards a common purpose.
                                </p>
                            </div>
                        </div>

                        <div className={styles.formWrapper}>
                            <div className={styles.formHeading}>
                                <span className={styles.sectionLabel}>SEND US A MESSAGE</span>
                                <h2>How can we help you?</h2>
                                <p>
                                    Fill in the details below and tell us what you would like
                                    to discuss.
                                </p>
                            </div>

                            <form className={styles.contactForm}>
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="fullName">Full Name</label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            placeholder="Enter your full name"
                                            required
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="phone">Phone Number (Optional)</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="Enter your phone number"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="subject">What is your enquiry about?</label>
                                    <select id="subject" name="subject" required defaultValue="">
                                        <option value="" disabled>
                                            Select an enquiry category
                                        </option>
                                        {contactOptions.map((option) => (
                                            <option value={option} key={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="message">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6"
                                        placeholder="Write your message here..."
                                        required
                                    />
                                </div>

                                <button type="button" className={styles.submitButton} disabled>
                                    Message submission coming soon
                                </button>

                                <p className={styles.formNotice}>
                                    Our online message submission service is still being set up.
                                    You can contact us directly using the email address or phone
                                    numbers provided.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.closing}>
                <div className={styles.closingContent}>
                    <span className={styles.sectionLabel}>LET&apos;S WORK TOGETHER</span>
                    <h2>Building a better future starts with connection.</h2>
                    <p>
                        Join us in advancing education, transforming mindsets and
                        building a stronger future together.
                    </p>
                    <Link href="/get-involved" className={styles.closingButton}>
                        Get Involved <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </section>
        </main>
    );
}
