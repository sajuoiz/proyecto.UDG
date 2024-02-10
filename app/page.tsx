import Link from 'next/link';
import Header from './header';
import ProductoDestacado from './components/Producto';
import CategoriaDestacada from './components/categoriaDestacada';
import Image from 'next/image';
import audifonosSonyImage from '../public/imagenes/audifonos_sony.jpg';
import laptopLegionImage from '../public/imagenes/laptop_legion.jpg';
import pcGamerImage from '../public/imagenes/pc_gamer.jpg';
import monitorLG from '../public/imagenes/monitor_lg.jpg';
import MacImage from '../public/imagenes/mac.jpg';
import AppleVision from '../public/imagenes/apple_vision.jpg';
import EchoDotImage from '../public/imagenes/echo_dot.jpg';
import InnovationImage from '../public/imagenes/innovation.jpg';
import bannerPrincipalImage from '../public/imagenes/banner-principal.jpg';

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col p-6">
      <Header />
      <main className="bg-light flex min-h-screen flex-col p-6">
        <section
          id="banner-principal"
          className="mb-6 bg-blue-500 pt-4 text-center text-white"
        >
          <Image
            src={bannerPrincipalImage}
            alt="Banner Principal"
            width={900}
            height={600}
          />
          <h2 className="mt-4 text-4xl font-bold" style={{ color: 'black' }}>
            La tecnología del futuro, hoy.
          </h2>
          <p className="mt-2 text-xl" style={{ color: 'black' }}>
            Vive la experiencia de la última innovación en cada producto.
          </p>
          <Link href="/productos">
            <button className="btn-primary">Comprar Ahora</button>
          </Link>
        </section>

        <section id="categorias-destacadas" className="my-4">
          <div className="container mx-auto p-4">
            <h3>Categorías Destacadas</h3>
            <div className="row justify-content-center">
              \
              <div className="col p-2">
                <CategoriaDestacada
                  imagenUrl={audifonosSonyImage.src}
                  titulo="Audifonos"
                  descripcion="Sumérgete en el mundo del sonido con nuestra amplia gama de audífonos. Desde modelos in-ear compactos y discretos hasta auriculares over-ear de alta fidelidad, nuestra colección está diseñada para llevar tu experiencia auditiva a un nuevo nivel."
                  enlace="/"
                  width={300}
                  height={300}
                />
              </div>
              <div className="col p-2">
                <CategoriaDestacada
                  imagenUrl={laptopLegionImage.src}
                  titulo="Laptops"
                  descripcion="Explora nuestra selección exclusiva de laptops para todos los usos: desde modelos ultraligeros para los que están siempre en movimiento, hasta potentes estaciones de trabajo para profesionales y gamers. Encuentra la herramienta perfecta que se adapte a tu estilo de vida y potencie tu productividad."
                  enlace="/"
                  width={300}
                  height={300}
                />
              </div>
              <div className="col p-2">
                <CategoriaDestacada
                  imagenUrl={pcGamerImage.src}
                  titulo="PC de escritorio"
                  descripcion="Descubre la potencia y versatilidad en nuestra selección de PCs de escritorio, diseñadas para satisfacer desde las tareas diarias hasta las demandas más intensas de los profesionales creativos y jugadores. "
                  enlace="/"
                  width={300}
                  height={300}
                />
              </div>
              <div className="col p-2">
                <CategoriaDestacada
                  imagenUrl={monitorLG.src}
                  titulo="Monitores"
                  descripcion="Amplía tu visión con nuestra colección de monitores, que ofrecen la claridad, el color y el rendimiento que necesitas para sumergirte completamente en tus proyectos y juegos. Desde resoluciones ultra nítidas hasta tasas de refresco que superan toda expectativa, cada monitor está diseñado para ofrecerte una experiencia visual sin precedentes."
                  enlace="/"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="productos-populares" className="my-4">
          <div className="container mx-auto p-4">
            <h3>Productos Populares</h3>
            <div className="grid grid-cols-4 gap-4">
              <ProductoDestacado
                imagenUrl={MacImage.src}
                nombre="MacBook Air M2"
                descripcion="La MacBook Air M2 es una obra maestra de la ingeniería y el diseño de Apple, que redefine lo que se puede esperar de un portátil ultraligero. Impulsada por el nuevo chip M2, esta MacBook Air ofrece un rendimiento impresionante y eficiencia energética sin precedentes."
                precio="$1099.00"
                enlace="/"
                width={600}
                height={350}
              />
              <ProductoDestacado
                imagenUrl={AppleVision.src}
                nombre="Apple Vision Pro"
                descripcion="El Apple Vision Pro redefine la computación personal con una experiencia inmersiva que diluye las barreras entre digital y físico. Con visionOS, interacciona con aplicaciones flotantes en un espacio tridimensional, utilizando controles naturales para una productividad sin límites y una conectividad más humana."
                precio="$3499.00"
                enlace="/"
                width={600}
                height={350}
              />
              <ProductoDestacado
                imagenUrl={EchoDotImage.src}
                nombre="Echo Dot 5"
                descripcion="El nuevo Echo Dot ofrece sonido excepcional y control inteligente en un diseño compacto. Con Alexa, disfruta de graves potentes y voces claras. Ve el clima y más en el LED actualizado."
                precio="$70.00"
                enlace="/"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>

        <section id="sobre-nosotros" className="my-4 bg-gray-100 py-4">
          <div className="d-flex container mx-auto ">
            <div className="row justify-content-center">
              <div className="col-4">
                <h3 className="mb-4 text-3xl font-bold">Sobre InnovaSphere</h3>
                <p>
                  En InnovaSphere, lideramos la innovación en el comercio
                  electrónico de productos tecnológicos. Nos dedicamos a
                  brindarte lo último en tecnología con un servicio al cliente
                  excepcional y precios sin competencia. Creemos en hacer la
                  tecnología accesible para enriquecer la vida cotidiana de
                  nuestros clientes.
                </p>
                <Link href="/" className="btn-about-us mt-6 inline-block">
                  Conoce Más
                </Link>
              </div>
              <div className="col-8">
                <Image
                  src={InnovationImage}
                  alt="Sobre InnovaSphere"
                  width={800}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
