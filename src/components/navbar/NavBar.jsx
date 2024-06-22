import PropTypes from "prop-types";
import { useState } from "react";
function NavBar({ setCategory, getSearchQuery }) {
  const [search, setSearch] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    getSearchQuery(search);
  }
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary fixed-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/doodle/48/news.png"
              alt="news"
            />
            Daily Bugle
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  General
                </a>
              </li>
              <li className="nav-item" onClick={() => setCategory("business")}>
                <a className="nav-link active" aria-current="page" href="#">
                  Busniess
                </a>
              </li>
              <li className="nav-item" onClick={() => setCategory("health")}>
                <a className="nav-link active" aria-current="page" href="#">
                  Health
                </a>
              </li>
              <li
                className="nav-item"
                onClick={() => setCategory("technology")}
              >
                <a className="nav-link active" aria-current="page" href="#">
                  Technology
                </a>
              </li>
              <li className="nav-item" onClick={() => setCategory("sports")}>
                <a className="nav-link active" aria-current="page" href="#">
                  Sports
                </a>
              </li>
            </ul>

            <form onSubmit={handleSubmit} className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
NavBar.propTypes = {
  setCategory: PropTypes.func,
};
export default NavBar;
