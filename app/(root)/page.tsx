import ProductList from '@/components/shared/product/product-list';
import { getLatestProducts } from '@/lib/actions/product.actions';
import { convertToPlainObject } from '@/lib/utils';

const Homepage = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <ProductList
      data={convertToPlainObject(latestProducts)}
      title='Newest Arrivals'
      limit={4}
    />
  );
};

export default Homepage;
