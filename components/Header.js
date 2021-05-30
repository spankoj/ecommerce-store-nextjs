import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>DermoCosmic</a>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/products">
              <a>Cart</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
