'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Header from './header';
import ProductoDestacado from './components/Producto';
import CategoriaDestacada from './components/categoriaDestacada';
import Banner from './components/banner';
import Footer from './footer';
import pcBanner from '../public/imagenes/pc-banner-0.jpg';
import monitorBanner from '../public/imagenes/pc-banner-1.jpg';
import Image from 'next/image';
import laptopGamerImg from '/public/imagenes/categorias/Laptop_Gamer_Categorias.jpg';
import computadoraGamerImg from '/public/imagenes/categorias/Computadoras_Gamer_Categorias.jpg';
import monitorGamerImg from '/public/imagenes/categorias/Monitor_Gamer_Categorias.jpg';
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
  const categories = [
    {
      imageUrl: laptopGamerImg,
      title: 'Laptops',
      description:
        'Descubre nuestra selección de laptops de alto rendimiento para gaming, trabajo y entretenimiento. Elige entre las mejores marcas y los últimos modelos.',
      link: '/categorias/computadoras-portatiles',
      width: 300,
      height: 200,
    },
    {
      imageUrl: computadoraGamerImg,
      title: 'Computadoras de Escritorio',
      description:
        'Explora nuestra amplia gama de smartphones, desde dispositivos de entrada hasta los más avanzados. Encuentra el teléfono perfecto para ti.',
      link: 'categorias/computadoras-escritorio',
      width: 300,
      height: 200,
    },
    {
      imageUrl: monitorGamerImg,
      title: 'Monitores',
      description:
        'Mejora tu experiencia de usuario con nuestra selección de teclados, ratones, auriculares y más. Todo lo que necesitas para tu configuración perfecta.',
      link: '/categorias/perifericos',
      width: 300,
      height: 200,
    },
    {
      imageUrl: '/imagenes/perifericos.jpg',
      title: 'teclados',
      description:
        'Mejora tu experiencia de usuario con nuestra selección de teclados, ratones, auriculares y más. Todo lo que necesitas para tu configuración perfecta.',
      link: '/categorias/perifericos',
      width: 300,
      height: 300,
    },
  ];
  return (
    <div className="flex min-h-screen flex-col p-6">
      <Header />
      <main className="bg-light flex min-h-screen flex-col p-6">
        <Banner />
        <div className="container my-4">
          <h3>Categorías Destacadas</h3>
          <div className="row">
            {categories.map((category, index) => (
              <div key={index} className="col-md-6 col-lg-4 col-xl-3 mb-4">
                <CategoriaDestacada
                  imageUrl={category.imageUrl}
                  title={category.title}
                  description={category.description}
                  link={category.link}
                  width={category.width}
                  height={category.height}
                />
              </div>
            ))}
          </div>
        </div>

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
        <Footer />

        {/* <section id="sobre-nosotros" className="my-4 bg-gray-100 py-4">
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
        </section> */}
      </main>
    </div>
  );
};

export default Home;
