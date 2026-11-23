
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <Link href="/" className="brand" aria-label="Future Voice Network home">
          <Image
            src="/logos/fvn-logo.png"
            alt="Future Voice Network logo"
            width={180}
            height={70}
            priority
          />
        </Link>

        <nav className="main-navigation" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/programmes">Programmes</Link>
          <Link href="/get-involved">Get Involved</Link>
        </nav>
      </div>
    </header>
  );
}
