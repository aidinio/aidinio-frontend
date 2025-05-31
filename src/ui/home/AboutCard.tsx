import PrimaryLink from "@/components/custom/link/PrimaryLink";

export default function AboudCard() {
  return (
    <div className="sm:size-[36rem] w-[80vw] max-w-[27rem] sm:max-w-none bg-white rounded-[40px] sm:rounded-[60px] flex -mt-[7rem] sm:mt-0 flex-col gap-[1.875rem] items-center justify-between py-[2.75rem] sm:py-[65px] px-[40px] sm:px-[5rem] drop-shadow-[10px_10px_0_0_rgba(0,0,0,1)] shadow-default">
      <h1 className="text-[3.75rem] sm:text-[6rem] font-bold w-fit">
        {`I'm`}{" "}
        <span className="bg-gradient-to-r from-[#DCBAFF] to-[#FFA4A4] bg-clip-text text-transparent">
          Aidin
        </span>
      </h1>
      <p className="text-justify text-[1.125rem] sm:text-[1.5rem] font-medium text-[#939393]">
        A{" "}
        <span className="font-bold bg-gradient-to-r from-[#DCBAFF] to-[#FFA4A4] bg-clip-text text-transparent uppercase">
          passionate
        </span>{" "}
        <span className="font-bold text-black">programmer</span>, currently
        working as a <span className="text-black">fronted devevloper</span>, and
        an all-time Linux and FOSS enthusiast.
      </p>
      <PrimaryLink href="/about">
        read more
        <div
          className={`bg-[url(/arrow.svg)] bg-center bg-size-[cover] size-[17px] sm:size-[20px] bg-no-repeat inline-block`}
        />
      </PrimaryLink>
    </div>
  );
}
