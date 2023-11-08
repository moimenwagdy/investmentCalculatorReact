export default function ReuseInput({ onChange, content, value }) {
  return (
    <div className="">
      <label>{content}</label>
      <input type="number" required onChange={onChange} value={value} />
    </div>
  );
}
