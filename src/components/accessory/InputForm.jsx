export default function InputForm({ placeholder, className }) {
  return (
    <>
      <input
        type="text"
        className={`border-b-2 px-2 focus:outline-none focus:border-b-2 focus:border-b-[#fd0] font-light ${className} `}
        placeholder={placeholder}
      />
    </>
  );
}
