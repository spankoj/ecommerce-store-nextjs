import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import Image from 'next/image';
import { useState } from 'react';
import { getCookieValue, setCookie } from '../../utils/cookies';

export default function ProductPage({ prod }) {
  const [quantity, setQuantity] = useState('1');
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
          <p>{`${prod.price} EUR`}</p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: '5px',
              width: '250px',
            }}
          >
            <h3>Amount:</h3>
            <input
              style={{ marginLeft: '10px', width: '40px' }}
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
            <button
              onClick={() => {
                const outDatedValue = getCookieValue('cart') || [];
                if (
                  outDatedValue.some((cookieObj) => cookieObj.id === prod.id)
                ) {
                } else {
                  const upDatedValue = [
                    ...outDatedValue,
                    { id: prod.id, quantity: quantity },
                  ];
                }
                setCookie('cart', upDatedValue);
              }}
            >
              Add to cart
            </button>
          </div>
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
