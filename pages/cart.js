import Head from "next/head";
import { FaShoppingCart } from "react-icons/fa";
import styles from "../styles/Cart.module.css";

import products from "../products.json";

import Table from "../components/Table/Table";
import { useCart } from "../hooks/use-cart";

const columns = [
  {
    columnId: "title",
    Header: "Product Name",
  },
  {
    columnId: "quantity",
    Header: "Quantity",
  },
  {
    columnId: "pricePerUnit",
    Header: "Price Per Item",
  },
  {
    columnId: "total",
    Header: "Item Total",
  },
];

export default function Cart() {
  const { cartItems, checkout, updateItem } = useCart();

  const data = cartItems.map((item) => {
    const { title } = products.find(({ id }) => item.id === id);

    const Quantity = () => {
      const handleOnSubmit = (ev) => {
        ev.preventDefault();

        const { currentTarget } = ev;
        const inputs = Array.from(currentTarget.elements);
        const quantity = inputs.find((input) => input.name === "quantity")
          ?.value;

        updateItem({ id: item.id, quantity: quantity && parseInt(quantity) });
      };

      return (
        <form onSubmit={handleOnSubmit}>
          <input
            type="number"
            name="quantity"
            min={0}
            defaultValue={item.quantity}
          />
          <button>Update</button>
        </form>
      );
    };

    return {
      ...item,
      quantity: <Quantity />,
      total: item.quantity * item.pricePerItem,
      pricePerUnit: item.pricePerItem,
      title,
    };
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Shopping Cart - Yoplet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <FaShoppingCart /> Cart
        </h1>

        <Table className={styles.table} data={data} columns={columns} />

        <p className={styles.checkout}>
          <button className={styles.button} onClick={checkout}>
            Check Out
          </button>
        </p>
      </main>
    </div>
  );
}
