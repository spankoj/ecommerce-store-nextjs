import Layout from '@/components/Layout';
import styles from '@/styles/Cart.module.css';
import Image from 'next/image';
import Link from 'next/link';

function cart(props) {
  console.log(props);
  return (
    <Layout>
      <div className={styles.page}>
        <h1>Your Cart</h1>
        {/* {JSON.stringify(props.cartItems)} */}
        <div className={styles.sumdiv}>
          <h3>Your Total:</h3>
          <p>
            {props.cartItems.reduce((accumulator, currentValue) => {
              return accumulator + currentValue.price * currentValue.quantity;
            }, 0)}{' '}
            EUR
          </p>

          <Link href="/checkout">
            <a>Check out</a>
          </Link>
          <button
            className="btn"
            style={{ background: 'gray', margin: '10px 0' }}
          >
            Clear
          </button>
        </div>
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
