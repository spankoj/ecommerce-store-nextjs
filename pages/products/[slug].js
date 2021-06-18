import Layout from '@/components/Layout';
import Image from 'next/image';
import { useState } from 'react';
import { getCookieValue, setCookie } from '../../utils/cookies';

export default function ProductPage({ prod, ...props }) {
  // console.log(props);
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
              width: '280px',
            }}
          >
            <h3>Quantity:</h3>
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
              className="btn"
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

                const isItemInCart = props.cartItems.find((item) => {
                  return item.id === prod.id;
                });
                if (isItemInCart) {
                  return props.setCartItems(
                    props.cartItems.map((item) => {
                      if (item.id === prod.id) {
                        item.quantity = item.quantity + quantity;
                        return { ...item };
                      }
                      return { ...item };
                    }),
                  );
                }
                props.setCartItems([
                  ...props.cartItems,
                  {
                    id: prod.id,
                    image: prod.image,
                    name: prod.name,
                    price: prod.price,
                    quantity: quantity,
                  },
                ]);
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
  // The name inside the square brackets of the filename
  // is inside of the `context.query` object
  const slug = context.query.slug;
  // console.log('slug:', slug);
  const { getProductBySlug } = await import('../../utils/database');
  const prod = await getProductBySlug(slug);

  return {
    props: { prod: prod },
  };
}
