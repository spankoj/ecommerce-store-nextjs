import Layout from '@/components/Layout';
import ProductItem from '@/components/ProductItem';

export default function ProductsPage({ products, cartNumber, setCartNumber }) {
  return (
    <Layout
      title="Products page"
      cartNumber={cartNumber}
      setCartNumber={setCartNumber}
    >
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
