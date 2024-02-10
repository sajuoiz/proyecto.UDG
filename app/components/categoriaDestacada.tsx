import Link from 'next/link';
import Image from 'next/image';

type CategoriaDestacadaProps = {
  imagenUrl: string;
  titulo: string;
  descripcion: string;
  enlace: string;
  width: number;
  height: number;
};

const CategoriaDestacada: React.FC<CategoriaDestacadaProps> = ({
  imagenUrl,
  titulo,
  descripcion,
  enlace,
  width,
  height,
}) => {
  return (
    <div className="card" style={{ minHeight: '736px' }}>
      <Image
        src={imagenUrl}
        className="card-img-top"
        alt={titulo}
        width={width}
        height={height}
      />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{descripcion}</p>
        <Link href={enlace} className="btn btn-primary">
          Explorar
        </Link>
      </div>
    </div>
  );
};

export default CategoriaDestacada;
