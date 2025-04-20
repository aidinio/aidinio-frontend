import Image from "next/image";
import ContactBar from "./ContactBar";

export default function Home() {
  return (
    <div className="flex items-center justify-center gap-[64px] grow">
      <Image
        alt="Portrait of Aidin"
        src={"/portrait.jpg"}
        width={575}
        height={575}
        className="rounded-[60px] shadow-default"
      />
      <div className="flex items-center gap-[32px]">
        <div className="size-[575px] bg-white rounded-[60px] flex flex-col items-center justify-between py-[65px] px-[80px] drop-shadow-[10px_10px_0_0_rgba(0,0,0,1)] shadow-default">
          <h1 className="text-[96px] font-bold w-fit">
            {`I'm`}{" "}
            <span className="bg-gradient-to-r from-[#DCBAFF] to-[#FFA4A4] bg-clip-text text-transparent">
              Aidin
            </span>
          </h1>
          <p className="text-justify text-[24px] font-semibold text-[#939393] px-6">
            A{" "}
            <span className="font-bold bg-gradient-to-r from-[#DCBAFF] to-[#FFA4A4] bg-clip-text text-transparent uppercase">
              passionate
            </span>{" "}
            <span className="font-bold text-black">programmer</span>,
            currently working as a{" "}
            <span className="text-black">fronted devevloper</span>, and an
            all-time Linux and FOSS enthusiast.
          </p>
          <a className="px-[35px] py-[20px] rounded-[20px] text-[16px] bg-gradient-to-r to-50%  from-[#B3B8E9] to-[#FFD9F0] uppercase font-bold flex justify-center items-center gap-3" href="">
            read more <div className="bg-[url(/arrow.svg)] bg-center bg-size-[cover] size-[20px] bg-no-repeat inline-block"></div>
          </a>
        </div>
        <ContactBar />
      </div>
    </div>
  );
}
