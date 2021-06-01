import Layout from '@/components/Layout';
import ProductItem from '@/components/ProductItem';
import { API_URL } from '@/config/index';
import { css } from '@emotion/react';

const color = 'green';

const divStyles = css`
  background-color: #ddd;
  margin-top: 20px;
  padding: 10px;
  color: ${color};
`;

export default function HomePage({ products }) {
  return (
    <div>
      <Layout>
        <h1>Products</h1>
        {products.length === 0 && <h3>No products to show</h3>}

        {products.map((prod) => {
          return <ProductItem key={prod.id} prod={prod} />;
        })}
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/products`);
  const products = await res.json();

  return {
    props: { products },
  };
}
