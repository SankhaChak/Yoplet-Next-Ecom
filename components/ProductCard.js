import Link from "next/link";
import styles from "../styles/Home.module.css";

const ProductCard = ({ title, description, price, image, id, addToCart }) => {
  return (
    <li className={styles.card}>
      <Link href={`/products/${id}`}>
        <a>
          <img src={image} alt={title} />
          <h3>{title}</h3>
          <p>${price}</p>
          <p>{description}</p>
        </a>
      </Link>
      <p>
        <button className={styles.button} onClick={() => addToCart({ id })}>
          Add To Cart
        </button>
      </p>
    </li>
  );
};

export default ProductCard;
