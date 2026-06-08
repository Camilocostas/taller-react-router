import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header>
        <h1>Logo</h1>
        <nav>
          <Link to="/e9">Home</Link> |{" "}
          <Link to="/e9/services">Services</Link> |{" "}
          <Link to="/e9/works">Works</Link> |{" "}
          <Link to="/e9/team">Team</Link> |{" "}
          <Link to="/e9/pricing">Pricing</Link> |{" "}
          <Link to="/e9/contact">Contact</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;