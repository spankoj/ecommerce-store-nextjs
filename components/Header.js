import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header clasName={styles.header}>
      <div className={styles.logo}>
        <Link href="/">DermoCosmic</Link>
      </div>
    </header>
  );
}
