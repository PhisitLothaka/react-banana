export default function ProductCard() {
  return (
    <div className="bg-white w-[270px] h-[454px] rounded-md hover:shadow-xl cursor-pointer duration-300 p-4">
      <div className=" relative   ">
        <img
          className="absolute "
          src="https://media-cdn.bnn.in.th/359461/4-frame_label_square_medium.png"
          alt="flame"
        />
        <div className="bg-red-200">
          <p className="absolute left-0 text-xs text-gray-400 bg-gray-200 p-1 opacity-80 ">
            OPPO
          </p>
          <img
            src="https://media-cdn.bnn.in.th/153276/Re-Design-Overlay-BNN-2-square_thumbnail.jpg"
            className="absolute right-0  w-8"
          />

          <img
            src="https://media-cdn.bnn.in.th/293293/Samsung-Smartphone-Galaxy-A24-1-square_medium.jpg"
            alt="product"
          />
        </div>
      </div>
      <div className=" flex flex-col gap-2">
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
