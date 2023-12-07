import { Link } from "react-router-dom";

interface Props {
  pages: string[];
}
// Define a style object with margin on right and left
const navStyle = {
  margin: "0 200px", // Adjust the margin as needed
};
function NavBar(props: Props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid" style={navStyle}>
          <a className="navbar-brand" href="#">
            A2Z Renovations
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            flex-wrap
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              {props.pages.map((page) => (
                <Link
                  className="nav-link"
                  to={`/${page.toLowerCase().replace(/\s/g, "-")}`}
                  key={page}
                >
                  {page}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
