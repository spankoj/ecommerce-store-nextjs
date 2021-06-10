import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import Image from 'next/image';
import { useState } from 'react';
import { getCookieValue, setCookie } from '../../utils/cookies';

export default function ProductPage({ prod, ...props }) {
  const [quantity, setQuantity] = useState('1');
  return (
    <Layout cartNumber={props.cartNumber} setCartNumber={props.setCartNumber}>
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
                const previousCookieValue = getCookieValue('cart') || [];
                let upDatedCookieValue;
                if (
                  previousCookieValue.some(
                    (cookieObj) => cookieObj.id === prod.id,
                  )
                ) {
                  const cookieObject = previousCookieValue.find(
                    (cookieobj) => cookieobj.id === prod.id,
                  );
                  cookieObject.quantity =
                    cookieObject.quantity + Number(quantity);
                  upDatedCookieValue = [...previousCookieValue];
                } else {
                  upDatedCookieValue = [
                    ...previousCookieValue,
                    { id: prod.id, quantity: Number(quantity) },
                  ];
                }
                setCookie('cart', upDatedCookieValue);
                props.setCartNumber(props.cartNumber + Number(quantity));
                handleCartItem;
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

export async function getServerSideProps(context) {
  const prodId = context.query.prodId;
  const { getProductById } = await import('../../utils/database');
  const prod = await getProductById(prodId);

  return {
    props: { prod: prod },
  };
}
