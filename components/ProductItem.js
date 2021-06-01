import styles from '@/styles/ProductItem.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductItem({ prod }) {
  return (
    <div className={styles.product}>
      <div className={styles.img}>
        <Image
          src={prod.image ? prod.image : '/images/icon.png'}
          alt="product img"
          width={100}
          height={150}
        />
      </div>

      <div className={styles.info}>
        <h3>{prod.name}</h3>
        <h4>{prod.need}</h4>
        <p>{prod.productType}</p>
      </div>

      <div className={styles.link}>
        <Link href={`/products/${prod.slug}`}>
          <a className="btn">Go to Product</a>
        </Link>
      </div>
    </div>
  );
}
