import Image from 'next/image';
import Link from 'next/link';

type ProductoProps = {
  imagenUrl: string;
  nombre: string;
  descripcion: string;
  precio: string;
  enlace: string;
  width: number;
  height: number;
};

const Producto: React.FC<ProductoProps> = ({
  imagenUrl,
  nombre,
  descripcion,
  precio,
  enlace,
  width = 600,
  height = 350,
}) => {
  return (
    <div className="producto-card my-4">
      <Image
        src={imagenUrl}
        alt={nombre}
        width={width}
        height={height}
        className="producto-img"
      />
      <h4 className="producto-nombre">{nombre}</h4>
      <div style={{ padding: '0 50px' }}>
        <p className="producto-descripcion">{descripcion}</p>
        <p className="producto-precio">{precio}</p>
      </div>

      <Link href={enlace}>
        <button className="producto-boton">Ver Detalles</button>
      </Link>
    </div>
  );
};

export default Producto;
