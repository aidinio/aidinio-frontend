export default function BlogTag({ text }: { text: string }) {
  return (
    <span className="font-semibold rounded-full px-[17px] py-[6px] bg-white shadow-[0px_0px_10px_0px_#E9E9E9]">
      {text}
    </span>
  );
}
