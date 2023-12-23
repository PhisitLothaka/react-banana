export default function SearchBox() {
  return (
    <form className="flex gap-2">
      <input
        type="text"
        className="border-b-2 w-[500px] px-2 focus:outline-none focus:border-b-2 focus:border-b-[#fd0] "
        placeholder="ค้นหาสินค้าที่ต้องการที่นี่....."
      />
      <button className="bg-[#fd0] p-2 rounded-md ">ค้นหา</button>
    </form>
  );
}
