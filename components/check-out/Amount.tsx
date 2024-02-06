import "./Amount.css";

export default function Amount({ amount }: { amount: Number }) {
  return (
    <div className="flex border rounded-md">
      <button lower-quantity className="border-r p-1" id="lower_button">
        -
      </button>
      <input
        input-number
        type="number"
        className={`w-10 remove-arrows text-center`}
        value={amount.valueOf()}
      />
      <button upper-quantity className="border-l p-1">
        +
      </button>
    </div>
  );
}
