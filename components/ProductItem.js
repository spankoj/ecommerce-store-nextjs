import styles from '@/styles/EventItem.module.css';
import Image from 'next/image';

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
    </div>
  );
}
