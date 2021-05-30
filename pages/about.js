import Link from 'next/link';
import Layout from '../components/Layout';

export default function AboutPage() {
  return (
    <Layout title="About site">
      <h1>About</h1>
      <p>
        This ecommerce web site is created as a bootcamp project practicing
        Next.js framework.
      </p>
      <p>Version: 1.0.0</p>
      <Link href="/">Home</Link>
    </Layout>
  );
}
