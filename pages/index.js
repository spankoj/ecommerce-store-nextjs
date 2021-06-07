import Layout from '@/components/Layout';
import { css } from '@emotion/react';
import Image from 'next/image';

const color = 'green';

const divStyles = css`
  background-color: #ddd;
  margin-top: 20px;
  padding: 10px;
  color: ${color};
`;

export default function HomePage() {
  return (
    <div>
      <Layout>
        <h1>Landing Page</h1>
        <Image
          src="/images/landing.png"
          alt="landing photo"
          width={1000}
          height={400}
        />
      </Layout>
    </div>
  );
}
