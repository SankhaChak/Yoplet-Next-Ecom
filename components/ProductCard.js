import { initiateCheckout } from "../lib/payments";
import styles from "../styles/Home.module.css";

const ProductCard = ({ title, description, price, image, id, addToCart }) => {
  return (
    <li className={styles.card}>
      <a href="#">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>${price}</p>
        <p>{description}</p>
      </a>
      <p>
        <button className={styles.button} onClick={() => addToCart({ id })}>
          Add To Cart
        </button>
      </p>
    </li>
  );
};

export default ProductCard;
