import styles from '@/styles/Header.module.css';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

export default function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/icon.png" alt="icon" />
        <Link href="/">
          <a>DermoCosmic</a>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/products">
              <a>Products</a>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <a>
                <FaShoppingCart />
                Cart
              </a>
            </Link>
          </li>
          <li>
            <p>{props.cartNumber}</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}
