export default function ButtonForm({ text, color, width }) {
  return (
    <>
      <button className={`${color} ${width} p-2 rounded-md`}>{text}</button>
    </>
  );
}
