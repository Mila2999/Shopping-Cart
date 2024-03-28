import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUKTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My first Book',
    description: 'The First Book i ever wrote',
  },
  {
    id: 'p2',
    price: 5,
    title: 'My Second Book',
    description: 'The Second Book i ever wrote',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUKTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
