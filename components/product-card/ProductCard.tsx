import { Star } from "lucide-react";
import "./product-card.css";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductCard = ({
  title,
  image,
  price,
  rating,
}: ProductCardProps) => {

  const formatPrice = (price: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);


  return (
    <section className="product_card">
      <figure className="product_card__figure">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="product_card__image"
        />
      </figure>
      <article className="product_card__article">
        <h1>{title}</h1>
        <span className="product_card__info">
          <p><Star size={16} stroke="#FFC107" fill="#FFC107"/>{rating.rate}</p>
          <p>{formatPrice(price)}</p>
        </span>
      </article>
    </section>
  );
};

export default ProductCard;
