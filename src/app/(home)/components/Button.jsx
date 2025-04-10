export default function Button({ buttonText }) {
  return (
    <button className="bg-[#00B22C] hover:bg-[#00b22cda] text-white px-5 py-2 text-sm rounded transition-all duration-300 cursor-pointer w-fit uppercase">
      {buttonText}
    </button>
  );
}
