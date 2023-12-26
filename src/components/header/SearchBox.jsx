import InputForm from "../accessory/InputForm";

export default function SearchBox() {
  return (
    <form className="flex gap-2  items-center">
      <InputForm
        placeholder={"ค้นหาสินค้าที่ต้องการที่นี่......"}
        className={"w-[500px]"}
      />
      <button className="bg-[#fd0] p-2 rounded-md ">ค้นหา</button>
    </form>
  );
}
