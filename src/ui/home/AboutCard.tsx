import GradientText from "@/components/custom/GradientText";
import PrimaryLink from "@/components/custom/link/PrimaryLink";

export default function AboudCard() {
  return (
    <div className="2xl:size-[36rem] xl:h-[fit] xl:w-[36rem] w-[80vw] max-w-[27rem] xl:max-w-[36rem]  bg-white rounded-[40px] md:rounded-[2rem] xl:rounded-[3.75rem] flex -mt-[7rem] md:mt-0 flex-col gap-[2rem] md:gap-[2rem] 2xl:gap-[1.875rem] items-center justify-between py-[2.75rem] md:py-[2rem] lg:py-[3rem] px-[2.5rem] md:px-[2rem] lg:px-[3rem] 2xl:px-[5rem] drop-shadow-[10px_10px_0_0_rgba(0,0,0,1)] shadow-default">
      <h1 className="text-[3.75rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[4.2rem] 2xl:text-[5.6rem] font-bold w-fit">
        {`I'm`}{" "}
        <GradientText>Aidin</GradientText>
      </h1>
      <p className="text-justify text-[1.125rem] md:text-[1rem] xl:text-[1.3rem] 2xl:text-[1.5rem] font-medium text-[#939393]">
        A{" "}
        <GradientText className="uppercase">Passionate</GradientText>{" "}
        <span className="font-bold text-black">programmer</span>, currently
        working as a <span className="text-black">fronted devevloper</span>, and
        an all-time Linux and FOSS enthusiast.
      </p>
      <PrimaryLink href="/about">
        read more
        <div
          className={`bg-[url(/arrow.svg)] bg-center bg-size-[cover] size-[1rem] md:size-[1.25rem] bg-no-repeat inline-block`}
        />
      </PrimaryLink>
    </div>
  );
}
