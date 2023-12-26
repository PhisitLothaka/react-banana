import Logo from "../components/header/Logo";
import SearchBox from "../components/header/SearchBox";
import Login from "../components/header/Login";
import Cart from "../components/header/Cart";

export default function Header() {
  return (
    <div className="flex justify-around h-20 items-center border-b bg-white fixed w-full z-20">
      <Logo />
      <div>
        <SearchBox />
      </div>
      <div className="flex gap-2  w-[150px] justify-around items-center">
        <Login />
        <div className="h-[1.5rem] border-r-[1px]"></div>
        <Cart />
      </div>
    </div>
  );
}
