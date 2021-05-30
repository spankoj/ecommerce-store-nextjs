import { css } from '@emotion/react';
// import { linkSync } from 'fs';
import Link from 'next/link';
import Layout from '../components/Layout';

const color = 'green';

const divStyles = css`
  background-color: #ddd;
  margin-top: 20px;
  padding: 10px;
  color: ${color};
`;

export default function Home() {
  return (
    <div>
      <Layout>
        <h1>Home</h1>
        <Link href="/about">About</Link>
      </Layout>
    </div>
  );
}
