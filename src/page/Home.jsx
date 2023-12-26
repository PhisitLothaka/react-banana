import Banner from "../components/Banner";
import ProductList from "../features/productList";

export default function Home() {
  return (
    <div className="flex justify-center pt-24">
      <div className=" w-3/4 p-4">
        <Banner />
        <ProductList />
      </div>
    </div>
  );
}
