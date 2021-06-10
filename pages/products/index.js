import Layout from '@/components/Layout';
import ProductItem from '@/components/ProductItem';
import { getInclusionDirectives } from '@apollo/client/utilities';

export default function ProductsPage({ products }) {
  return (
    <Layout title="Products page">
      <h1>Products Page</h1>
      {products.map((prod) => {
        return <ProductItem key={prod.id} prod={prod} />;
      })}
    </Layout>
  );
}

export async function getServerSideProps() {
  const { getProducts } = await import('../../utils/database');
  const products = await getProducts();
  return {
    props: { products },
  };
}
