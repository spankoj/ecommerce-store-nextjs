import Layout from '@/components/Layout';
import ProductItem from '@/components/ProductItem';

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
  const { products } = await import('../../utils/database');
  return {
    props: { products },
  };
}
