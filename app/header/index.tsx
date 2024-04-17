import Image from 'next/image';
import LogoImg from '../../public/imagenes/logo/logo-principal.png';

const Header = () => {
  return (
    <header className={`navbar navbar-expand-lg navbar-dark custom-header`}>
      <div className="container-fluid">
        <a className="navbar-brand" style={{ marginLeft: '50px' }} href="#">
          CiberEspacio
          <Image
            src={LogoImg}
            alt="Logo de la empresa"
            width={50}
            height={50}
            style={{ marginLeft: '20px' }}
          />
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
        {/* create a next image with a good aspect ratio for the logo in the header */}

        <div
          className="navbar-collapse d-flex justify-content-end collapse me-4"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav custom-navbar-nav">
            <li className="data-container px-4">
              <a className="btn" href="#categorias-destacadas">
                Categorias
              </a>
            </li>
            <li className="data-container px-4">
              <a className="btn" href="#productos-populares">
                Ayuda
              </a>
            </li>
            <li className="data-container px-4">
              <a className="btn" href="#sobre-nosotros">
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
