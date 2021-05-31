const { products } = require('./data.json');

export default (req, res) => {
  const prod = products.filter((prod) => prod.slug === req.query.slug);

  if (req.method === 'GET') {
    res.status(200).json(prod);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};
