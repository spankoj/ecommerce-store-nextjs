import Layout from '@/components/Layout';
import styles from '@/styles/Cart.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { setCookie } from '../utils/cookies';

function cart(props) {
  console.log(props);
  return (
    <Layout cartNumber={props.cartNumber} setCartNumber={props.setCartNumber}>
      <div className={styles.page}>
        <h1>Your Cart</h1>
        {/* {JSON.stringify(props.cartItems)} */}
        <div className={styles.sumdiv}>
          <h3>Your Total:</h3>
          <p>
            {props.superProduct.reduce((accumulator, currentValue) => {
              return accumulator + currentValue.price * currentValue.quantity;
            }, 0)}{' '}
            EUR
          </p>

          <Link href="/checkout">
            <a className="btn-secondary">Check out</a>
          </Link>
          <button
            className="btn"
            style={{ background: 'gray', margin: '10px 0' }}
            onClick={() => setCookie('cart', [])}
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

export async function getServerSideProps(context) {
  const cookie = JSON.parse(context.req.cookies.cart || '[]');
  // console.log('cookie:', cookie);

  const { getProducts } = await import('../utils/database');
  const products = await getProducts();
  // console.log('products:', products);

  // Creating superProducts array

  // const cookieActual = cookie.find(({ id }) => id === 1);
  // console.log('cookieActual:', cookieActual);

  // const prodActual = products.find(({ id }) => id === 1);
  // console.log('prodActual:', prodActual);

  // const superProduct = { ...prodActual, quantity: cookieActual.quantity };
  // console.log('superProduct:', superProduct);

  const superProduct = cookie.map((cookieItem) => {
    const prodActual = products.find(({ id }) => id === cookieItem.id);
    return { ...prodActual, quantity: cookieItem.quantity };
  });

  return {
    props: { superProduct },
  };
}
