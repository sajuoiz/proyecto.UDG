const Header = () => {
  return (
    <header className={`navbar navbar-expand-lg navbar-dark custom-header`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          InnovaSphere
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarNavDropdown">
          <ul className="navbar-nav custom-navbar-nav">
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link custom-nav-link"
                href="#categorias-destacadas"
              >
                Categorias
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="#">
                Tendencia
              </a>
            </li>
            <li className="nav-item" style={{ paddingRight: '40px' }}>
              <a className="nav-link custom-nav-link" href="#">
                Nosotros
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
