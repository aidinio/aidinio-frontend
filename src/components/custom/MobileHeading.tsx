export default function MobileHeading({ title }: { title: string }) {
  return (
    <h1 className="text-[4rem] font-black py-[2rem] px-[3rem] bg-white sm:bg-transparent">
      {title}
    </h1>
  );
}
