import Link from "next/link";
const Navbar = ({ btnStatus }: { btnStatus: boolean }) => (
  <nav className="navbar">
    <ul>
      <li>
        <Link href="/">
          <img
            className="logo"
            src="/assets/images/logo.png"
            alt="Company logo"
          />
        </Link>
      </li>
      <li>
        {btnStatus && (
          <a className="btn btn-secondary" href="/upload">
            Try It Free
          </a>
        )}
      </li>
    </ul>
  </nav>
);

export default Navbar;
