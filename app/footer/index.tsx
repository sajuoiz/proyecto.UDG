import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      className="mt-auto py-4 text-white"
      style={{ backgroundColor: '#120925' }}
    >
      <div className="footer container">
        <div className="row">
          {/* Columna de información de la empresa */}
          <div className="col-md-4">
            <h5>CiberEspacio</h5>
            <ul className="list-unstyled">
              <li>
                <Link className="text-decoration-none text-white" href="/about">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none text-white"
                  href="/contact"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none text-white" href="/terms">
                  Términos de servicios
                </Link>
              </li>
            </ul>
          </div>
          {/* Columna de categorías */}
          <div className="col-md-4">
            <h5>Categorías</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  className="text-decoration-none text-white"
                  href="/categories/laptops"
                >
                  Laptops
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none text-white"
                  href="/categories/monitors"
                >
                  Monitores
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none text-white"
                  href="/categories/accessories"
                >
                  Accesorios
                </Link>
              </li>
            </ul>
          </div>
          {/* Columna de redes sociales */}
          <div className="col-md-4">
            <h5>Síguenos</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  className="text-decoration-none text-white"
                  href="https://www.facebook.com/CiberEspacio"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none text-white"
                  href="https://www.twitter.com/CiberEspacio"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none text-white"
                  href="https://www.instagram.com/CiberEspacio"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-top border-secondary py-3 text-center">
          <p className="mb-0">
            © 2024 CiberEspacio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
