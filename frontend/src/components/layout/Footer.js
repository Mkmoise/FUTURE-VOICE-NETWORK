import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link href="/" aria-label="Future Voice Network home">
            <Image
              src="/logos/fvn-logo.png"
              alt="Future Voice Network logo"
              width={150}
              height={58}
            />
          </Link>

          <p>
            Supporting young refugee students in accessing and continuing
            their education.
          </p>
        </div>

        <div className="footer-links">
          <h2>Explore</h2>
          <Link href="/">Home</Link>
          <Link href="/programmes">Programmes</Link>
          <Link href="/about">About Us</Link>
          <Link href="/get-involved">Get Involved</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-mission">
          <h2>Our Mission</h2>
          <p>
            To support young refugee students in accessing and continuing
            their education.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Future Voice Network.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
