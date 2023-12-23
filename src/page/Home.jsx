import Banner from "../components/Banner";
import ProductList from "../features/productList";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="w-4/5 h-screen flex pt-24">
        <div className="bg-red-400 w-1/4"></div>
        <div className=" w-3/4 p-4">
          <Banner />
          <ProductList />
        </div>
      </div>
    </div>
  );
}
