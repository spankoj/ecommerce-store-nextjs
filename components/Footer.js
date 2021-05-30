import styles from '@/styles/Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; DermoCosmic 2021</p>
      <Link href="/about">About this project</Link>
    </footer>
  );
}
