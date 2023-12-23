export default function ProductCard() {
  return (
    <div className="bg-white w-[195px] h-[405px] rounded-md hover:shadow-xl cursor-pointer duration-300">
      <div className=" flex justify-center relative p-4">
        <p className="absolute left-2 text-xs text-gray-400">OPPO</p>
        <img
          src="https://media-cdn.bnn.in.th/153276/Re-Design-Overlay-BNN-2-square_thumbnail.jpg"
          className="absolute right-2  w-8"
        />
        <img
          src="https://media-cdn.bnn.in.th/345404/OPPO-Champagne-Gold--1-thumbnail.jpg"
          alt="product"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <p>สมาร์ทโฟน OPPO Find N3</p>
        <p className="text-xs text-gray-400">
          6.7 inch | Snapdragon 8 Gen 2 | RAM 12GB / ROM 256GB | Android 13.0
          One UI 5.1.1 | 4,400 mAh
        </p>
        <p className="text-red-500 font-semibold">฿69,990</p>
      </div>
    </div>
  );
}
