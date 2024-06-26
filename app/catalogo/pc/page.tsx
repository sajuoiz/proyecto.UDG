'use client';

import Header from '../../header';
import Footer from '../../footer';
import { productosPc } from './pc';
import Image from 'next/image';

const CatalogoPc = () => {
  //funcion para convertir el precio que es un numero a una cadena de caracteres que incluya $ y , para separar los miles
  const convertirPrecio = (precio: number) => {
    return `$${precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  };

  return (
    <div style={{ backgroundColor: '#120925' }}>
      <Header />

      <div className="container-fluid">
        <div
          className="row justify-content-center"
          style={{ paddingTop: '50px', paddingBottom: '20px' }}
        >
          <div className="col-10">
            <h2 style={{ color: 'white' }}>
              <span className="fancy">PCs</span> Disponibles
            </h2>
          </div>
        </div>

        <div
          className="row justify-content-center"
          style={{ backgroundColor: '#DEDCD8', padding: '50px 0' }}
        >
          <div className="col-xl-12 col-xxl-11">
            <div className="row ">
              {productosPc.map((producto) => (
                <div className="col-sm-12 col-md-6 col-xxl-4" key={producto.id}>
                  <div
                    style={{
                      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                      borderRadius: '30px',
                      margin: '20px',
                      padding: '40px',
                      height: '390px',
                      backgroundColor: 'white',
                      opacity: 0.8,
                    }}
                    className="carta-personalizada"
                  >
                    <h3 style={{ fontWeight: 700 }} className="m-0">
                      {producto.nombre}
                    </h3>
                    <p style={{ fontWeight: 500, color: 'gray' }}>
                      {producto.detalles}
                    </p>
                    <div className=" d-flex justify-content-center">
                      {producto.imagen ? (
                        <Image
                          alt={`${producto.nombre} Imagen`}
                          src={producto.imagen}
                          width={200}
                          height={200}
                        />
                      ) : null}
                    </div>
                    <div className="d-flex justify-content-end pt-3">
                      <p style={{ fontSize: '20px' }}>
                        {convertirPrecio(producto.precio)} MXN
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CatalogoPc;
