import cookies from 'js-cookie';

export function getCookieValue(cookieName) {
  const cookieValue = cookies.getJSON(cookieName);
  return cookieValue;
}

export function setCookie(cookieName, value) {
  cookies.set(cookieName, JSON.stringify(value));
}
