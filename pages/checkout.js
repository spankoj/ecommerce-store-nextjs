import Layout from '@/components/Layout';
import styles from '@/styles/Checkout.module.css';
import Link from 'next/link';
import { useState } from 'react';

function checkout() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  return (
    <Layout>
      <form className={styles.form}>
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
          name="address"
          placeholder="Address"
          value={address}
          onChange={handleAddress}
        />
        <Link href="/thankyou">
          <a>Thank You Page</a>
        </Link>
        <button className="btn">Submit</button>
      </form>
      <div>
        <h1>Check Out Page</h1>
        <h2>Products</h2>
        <h3>Name</h3>
        <h3>Quantity</h3>
        <h3>Your Total: xxxx EUR</h3>
      </div>
    </Layout>
  );
}

export default checkout;
