const products = [
  {
    id: '1',
    name: 'URIAGE THERMAL WATER',
    slug: 'uriage-thermal-water',
    image: '/images/eau-thermale.png',
    description:
      'Uriage Thermal Water is a skincare water for daily use, a powerful treatment formulated with trace elements and mineral salts, a source of radiance for your skin.',
    need: 'Face Care',
    productType: 'water',
    price: 10,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    id: '2',
    name: 'AGE PROTECT - MULTI-ACTION CREAM',
    slug: 'age-protect-multi-action-cream',
    image: '/images/age-protect.png',
    description:
      'This smooth cream acts on both signs of aging and daily aggressions damaging the skin: blue light, UV rays, pollution, stress, fatigue... Enriched with moisturizing active ingredients, the skin is perfectly hydrated and supple.',
    need: 'Face Care',
    productType: 'cream',
    price: 25,
    countInStock: 7,
    rating: 4,
    numReviews: 8,
  },
  {
    id: '3',
    name: 'BÉBÉ - 1ST CLEANSING WATER',
    slug: 'bebe-1st.cleansing water',
    image: '/images/bebe.png',
    description:
      'With soothing Uriage Thermal Water and enriched with moisturizing and softening active ingredients, 1st Cleansing Water leaves the skin clean, soft and delicately scented.',
    need: 'Baby Care',
    productType: 'water',
    price: 16,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    id: '4',
    name: 'BARIÉDERM - CICA-LIPS',
    slug: 'bariederm-cica-lips',
    image: '/images/bariederm-cica.png',
    description:
      'The first barrier lip balm formulated with Poly-2p, an innovative patented complex, which offers a triple action. A high tolerance and long-lasting formula that is suitable for both professional and personal use.',
    need: 'Face Care',
    productType: 'balm',
    price: 6,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    id: '5',
    name: 'BARIÉSUN MILK SPF50+',
    slug: 'bariesun-milk-spf50+',
    image: '/images/bariesun.png',
    description:
      'Thanks to a high performance filtering complex, the lotion provides very high protection against UVA and UVB rays, free radicals and prevents skin from drying out. Its light, non-greasy and pleasantly fragranced texture guarantees renewed pleasure of use each time that it is applied. This lotion guarantees high safety, high tolerance and fast absorption.',
    need: 'Suncare',
    productType: 'milk',
    price: 14,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    id: '6',
    name: 'COLD CREAM',
    slug: 'cold-cream',
    image: '/images/cold-cream.png',
    description:
      'With its smooth, creamy non-oily texture, Uriage Cold Cream is the ideal protective face and body care for everyday use. It protects the skin against external aggressions (wind, cold, hard water, etc.).',
    need: 'Face Care',
    productType: 'cream',
    price: 11,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
];

exports.up = async function up(sql) {
  await sql`
	INSERT INTO products ${sql(
    products,
    'name',
    'slug',
    'image',
    'description',
    'need',
    'product_type',
    'price',
  )}
 `;
};

exports.down = async function down(sql) {
  for (const product of products) {
    await sql`
		DELETE FROM
			products
		WHERE
			name = ${product.name} AND
			slug = ${product.slug}
		`;
  }
};
