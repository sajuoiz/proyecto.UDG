import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ProductCategoryProps {
  imageUrl: string | StaticImageData;
  title: string;
  description: string;
  link: string;
  width: number;
  height: number;
}

const ProductCategory: React.FC<ProductCategoryProps> = ({
  imageUrl,
  title,
  description,
  link,
  width,
  height,
}) => {
  return (
    <div className="h-100">
      <Image src={imageUrl} alt={title} width={width} height={height} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Link href={link} className="btn btn-primary mt-auto">
          Explore
        </Link>
      </div>
    </div>
  );
};

export default ProductCategory;
