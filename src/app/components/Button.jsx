export default function Button({ buttonText }) {
  return (
    <button className="bg-[#00B22C] text-white px-5 py-[10px] rounded active:scale-[0.9] transition-all duration-300 cursor-pointer w-fit uppercase">
      {buttonText}
    </button>
  );
}
