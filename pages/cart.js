import Layout from '@/components/Layout';
import styles from '@/styles/Cart.module.css';
import Image from 'next/image';

function cart(props) {
  console.log(props);
  return (
    <Layout>
      <div>
        <h1>Cart Page</h1>
        <div>
          {props.cartItems.length > 0 &&
            props.cartItems.map((item) => (
              <div className={styles.product} key={item.name}>
                <Image
                  className={styles.img}
                  src={item.image || ''}
                  alt="xxx"
                  width={100}
                  height={150}
                />
                <div>{item.name}</div>
                <div>Price: {item.price} EUR</div>
                <div>Quantity: {item.quantity} pcs</div>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}

export default cart;
