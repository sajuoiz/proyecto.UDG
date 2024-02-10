import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Header from './header';

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col p-6">
      <Header />
      <main className="bg-light flex min-h-screen flex-col p-6">
        <section id="banner-principal" className="my-4">
          <div className="container mx-auto p-4">
            <h2>Bienvenidos a Nuestra Tienda</h2>
            <p>Encuentra lo último en tecnología, moda y mucho más.</p>
            <Link href="/productos" className="btn btn-primary mt-4">
              Comprar Ahora
            </Link>
          </div>
        </section>

        <section id="categorias-destacadas" className="my-4">
          <div className="container mx-auto p-4">
            <h3>Categorías Destacadas</h3>
            <div className="grid grid-cols-3 gap-4">
              {/* Aquí irían los componentes de cada categoría */}
            </div>
          </div>
        </section>

        <section id="productos-populares" className="my-4">
          <div className="container mx-auto p-4">
            <h3>Productos Populares</h3>
            <div className="grid grid-cols-4 gap-4">
              {/* Aquí irían los componentes o cards de productos */}
            </div>
          </div>
        </section>

        {/* Puedes añadir más secciones según lo necesites */}
      </main>
    </div>
  );
};

export default Home;
