import styles from "../styles/Home.module.css";

const ProductCard = ({ title, description, price, image }) => {
  return (
    <li className={styles.card}>
      <a href="https://nextjs.org/docs">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>${price}</p>
        <p>{description}</p>
      </a>
    </li>
  );
};

export default ProductCard;
