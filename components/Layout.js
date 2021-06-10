import styles from '@/styles/Layout.module.css';
import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

export default function Layout({
  title,
  keywords,
  description,
  children,
  ...props
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="discription" content={description}></meta>
        <meta name="keywords" content={keywords}></meta>
      </Head>

      <Header
        cartNumber={props.cartNumber}
        setCartNumber={props.setCartNumber}
      />

      <div className={styles.container}>{children}</div>

      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'DermoCosmic | Dermo cosmetics from Uriage',
  description: 'Find Uriage products for your skin',
  keywords: 'cosmetics, Uriage, dermocosmetics, skincare',
};
