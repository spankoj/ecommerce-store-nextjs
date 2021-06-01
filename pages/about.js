import Layout from '@/components/Layout';

export default function AboutPage() {
  return (
    <Layout title="About site">
      <h1>About</h1>

      <p>
        This ecommerce web site is created by{' '}
        <span style={{ fontWeight: 'bold' }}>János Spanyol</span> as a bootcamp
        project practicing Next.js framework.
      </p>
      <p>Version: 1.0.0</p>
      <p>
        Sources used from <span style={{ fontWeight: 'bold' }}>Udamy</span> :
      </p>
      <ul>
        <li>Next.js Dev to Deployment by Brad Traversy</li>
        <li>MERN eCommerce From Scratch by Brad Traversy </li>
      </ul>
    </Layout>
  );
}
