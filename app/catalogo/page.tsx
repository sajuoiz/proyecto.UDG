'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '../header';
import Footer from '../footer';
import categoriaPcImg from '/public/imagenes/categorias/categoria_pc.jpg';
import chevronIcono from '/public/imagenes/iconos/chevron.png';
import chevronIconoBlanco from '/public/imagenes/iconos/chevron-blanco.png';
import categoriaMonitorImagen from '/public/imagenes/categorias/categoria_monitor.jpg';
import categoriaRealidadVirtual from '/public/imagenes/categorias/categoria_vr.jpg';
import categoriaAudioImagen from '/public/imagenes/categorias/categoria_audio.jpg';

const Catalogo = () => {
  return (
    <div style={{ backgroundColor: '#120925' }}>
      <Header />

      <div className="container-fluid">
        <div className="row justify-content-center titulo-principal my-4">
          <div className="col-10">
            <h2 style={{ color: 'white' }}>
              <span className="fancy">Catalogo</span> de Productos
            </h2>
          </div>
        </div>
        <div
          className="row justify-content-center catalogo-seccion align-items-center"
          style={{ backgroundColor: '#FFF5EA' }}
        >
          <div className="col-10 col-lg-4">
            <Image
              src={categoriaPcImg}
              alt="Categoria PCs"
              height={200}
              objectFit="contain"
              style={{ width: 'auto' }}
            />
          </div>
          <div className="col-10 col-lg-7">
            <h3>PCs</h3>
            <div className="d-flex">
              <p className="pe-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Link href="/catalogo/pc">
                <Image
                  width={50}
                  height={50}
                  src={chevronIcono}
                  alt="Chevron Icono"
                  className="chevron-icono"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="row justify-content-center catalogo-seccion align-items-center fc-white">
          <div className="col-10 col-lg-4">
            <Image
              src={categoriaMonitorImagen}
              alt="Monitor Categoria"
              width={300}
              objectFit="contain"
              style={{ height: 'auto' }}
            />
          </div>
          <div className="col-10 col-lg-7">
            <h3>Monitores y Accesorios</h3>
            <div className="d-flex">
              <p className="pe-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Image
                width={50}
                height={50}
                src={chevronIconoBlanco}
                alt="Chevron Icono"
                className="chevron-icono"
              />
            </div>
          </div>
        </div>

        <div
          className="row justify-content-center catalogo-seccion align-items-center"
          style={{ backgroundColor: '#FFF5EA' }}
        >
          <div className="col-10 col-lg-4">
            <Image
              src={categoriaRealidadVirtual}
              alt="Categoria PCs"
              height={200}
              objectFit="contain"
              style={{ width: 'auto' }}
            />
          </div>
          <div className="col-10 col-lg-7">
            <h3>Realidad Virtual y Simulación Realidad Virtual y Simulación</h3>
            <div className="d-flex">
              <p className="pe-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Image
                width={50}
                height={50}
                src={chevronIcono}
                alt="Chevron Icono"
                className="chevron-icono"
              />
            </div>
          </div>
        </div>

        <div className="row justify-content-center catalogo-seccion align-items-center fc-white">
          <div className="col-10 col-lg-4">
            <Image
              src={categoriaAudioImagen}
              alt="Monitor Categoria"
              width={300}
              objectFit="contain"
              style={{ height: 'auto' }}
            />
          </div>
          <div className="col-10 col-lg-7">
            <h3>Audio</h3>
            <div className="d-flex">
              <p className="pe-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Image
                width={50}
                height={50}
                src={chevronIconoBlanco}
                alt="Chevron Icono"
                className="chevron-icono"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Catalogo;
