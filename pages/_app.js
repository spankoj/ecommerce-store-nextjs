import '../styles/globals.css';
import { useState } from 'react';
import { getCookieValue } from 'utils/cookies';

function MyApp({ Component, pageProps }) {
  // To add input quantity to quantity already stored in cookies 'cart' object
  const cartInit =
    getCookieValue('cart')
      ?.map((qty) => qty.quantity)
      .reduce(function (total, amount) {
        return total + amount;
      }) || 0;

  // Create states for quantity to be refreshed in UI
  const [cartNumber, setCartNumber] = useState(cartInit);
  const [cartItems, setCartItems] = useState([]);

  return (
    <Component
      cartNumber={cartNumber}
      setCartNumber={setCartNumber}
      cartItems={cartItems}
      setCartItems={setCartItems}
      {...pageProps}
    />
  );
}

export default MyApp;
