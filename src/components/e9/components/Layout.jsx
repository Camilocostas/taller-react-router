import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header>
        <h1>Logo</h1>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/services">Services</Link> |{" "}
          <Link to="/works">Works</Link> |{" "}
          <Link to="/team">Team</Link> |{" "}
          <Link to="/pricing">Pricing</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;