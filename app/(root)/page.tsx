import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data"

const Homepage = async () => {
  console.log(sampleData.products)

  return (
    <ProductList data={sampleData.products} title='Newest Arrivals' limit={4} />
  );
};

export default Homepage;
