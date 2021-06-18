import Layout from '@/components/Layout';
import styles from '@/styles/Checkout.module.css';
import Link from 'next/link';
import { useState } from 'react';

function checkout(props) {
  console.log(props);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [postCode, setPostCode] = useState('');
  const [street, setStreet] = useState('');

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleCountry = (e) => {
    setCountry(e.target.value);
  };
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  const handlePostCode = (e) => {
    setPostCode(e.target.value);
  };
  const handleStreet = (e) => {
    setStreet(e.target.value);
  };

  return (
    <Layout cartNumber={props.cartNumber} setCartNumber={props.setCartNumber}>
      <div className={styles.form}>
        <h1>Check Out Page</h1>
        <h2>Your Total:</h2>
        <p>
          {props.superProduct.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.price * currentValue.quantity;
          }, 0)}{' '}
          EUR
        </p>
      </div>
      <form className={styles.form}>
        <h1>Shipping Address</h1>
        <input
          className={styles.input}
          type="text"
          name="firstname"
          placeholder="First Name"
          value={firstName}
          onChange={handleFirstName}
        />
        <input
          className={styles.input}
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={lastName}
          onChange={handleLastName}
        />
        <input
          className={styles.input}
          type="text"
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={handleEmail}
        />
        <input
          className={styles.input}
          type="text"
          name="country"
          placeholder="Country"
          value={country}
          onChange={handleCountry}
        />
        <input
          className={styles.input}
          type="text"
          name="city"
          placeholder="City"
          value={city}
          onChange={handleCity}
        />
        <input
          className={styles.input}
          type="text"
          name="postcode"
          placeholder="Postcode"
          value={postCode}
          onChange={handlePostCode}
        />
        <input
          className={styles.input}
          type="text"
          name="street"
          placeholder="Street"
          value={street}
          onChange={handleStreet}
        />

        <Link href="/thankyou">
          <a
            className="btn-secondary"
            // onClick={}
          >
            Submit
          </a>
        </Link>
      </form>
    </Layout>
  );
}

export default checkout;

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
