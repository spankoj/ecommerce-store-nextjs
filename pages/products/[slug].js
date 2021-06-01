import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import styles from '@/styles/Product.module.css';
import Image from 'next/image';
import Link, { FaPencilAlt, FaTimes } from 'react-icons/fa';

export default function ProductPage({ prod }) {
  return (
    <Layout>
      <div>
        <div>
          <h1>{prod.name}</h1>
          {prod.image && (
            <div>
              <Image src={prod.image} width={150} height={180} />
            </div>
          )}
          <h3>Description</h3>
          <p>{prod.description}</p>
          <h3>Need:</h3>
          <p>{prod.need}</p>
          <h3>Product type:</h3>
          <p>{prod.productType}</p>
          <h3>Price:</h3>
          <p>{prod.price}</p>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/products/${slug}`);
  const products = await res.json();

  return {
    props: { prod: products[0] },
  };
}
