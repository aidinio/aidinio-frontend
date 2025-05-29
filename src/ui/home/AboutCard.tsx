import PrimaryLink from "@/components/custom/link/PrimaryLink";

export default function AboudCard() {
  return (
    <div className="sm:size-[575px] size-[90vw] bg-white rounded-[40px] sm:rounded-[60px] flex -mt-[70px] sm:mt-0 flex-col gap-[30px] items-center justify-between py-[45px] sm:py-[65px] px-[40px] sm:px-[80px] drop-shadow-[10px_10px_0_0_rgba(0,0,0,1)] shadow-default">
      <h1 className="text-[60px] sm:text-[96px] font-bold w-fit">
        {`I'm`}{" "}
        <span className="bg-gradient-to-r from-[#DCBAFF] to-[#FFA4A4] bg-clip-text text-transparent">
          Aidin
        </span>
      </h1>
      <p className="text-justify text-[18px] sm:text-[24px] font-medium text-[#939393] px-6">
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
