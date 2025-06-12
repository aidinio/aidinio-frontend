import ContactBar from "@/ui/home/ContactBar";
import PortraitCard from "@/ui/home/PortraitCard";
import AboutCard from "@/ui/home/AboutCard";

export default async function Home() {
  return (
    <main className="flex sm:items-center justify-center gap-[64px] grow h-full w-full fadeIn">
      <div className="flex flex-col md:flex-row justify-center items-center gap-[1.5rem] sm:gap-[1rem] 2xl:gap-[2rem] w-full">
        <PortraitCard alt={"Aidin's portrait"} src="/portrait.jpg" />
        <AboutCard />
        <ContactBar />
      </div>
    </main>
  );
}
