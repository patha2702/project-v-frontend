import Link from "next/link";
const HeroSection = () => (
  <section className="hero">
    <div className="company-title">
      <h1>We Collect & Connect</h1>
      <p>We erase the barrier of language and connect the world together.</p>
      <Link className="btn btn-primary" href="/upload">
        Get Started For Free
      </Link>
    </div>

    <div className="mockup">
      <img
        className="hero-image"
        src="/assets/images/Language-translator.svg"
        alt="Hero image"
      />
    </div>
  </section>
);
export default HeroSection;
