import Image from 'next/image';
import LogoImg from '../../public/imagenes/logo/logo-principal.png';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={`navbar navbar-expand-lg navbar-dark custom-header`}>
      <div className="container-fluid">
        <Link href="/" className="navbar-brand" style={{ marginLeft: '50px' }}>
          CiberEspacio
          <Image
            src={LogoImg}
            alt="Logo de la empresa"
            width={50}
            height={50}
            style={{ marginLeft: '20px' }}
          />
        </Link>

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

        <div
          className="navbar-collapse d-flex justify-content-end collapse me-4"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav custom-navbar-nav">
            <li className="data-container px-4">
              <Link className="btn" href="/catalogo">
                Catalogo
              </Link>
            </li>
            <li className="data-container px-4">
              <Link className="btn" href="/nosotros">
                Nosotros
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
