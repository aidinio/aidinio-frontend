import ContactBar from "@/ui/home/ContactBar";
import PortraitCard from "@/ui/home/PortraitCard";
import AboutCard from "@/ui/home/AboutCard";

export default async function Home() {
  return (
    <main className="flex sm:items-center justify-center gap-[64px] grow h-full w-full fadeIn">
      <div className="flex flex-col sm:flex-row items-center gap-[-50px] sm:gap-[32px]">
        <PortraitCard alt={"Aidin's portrait"} src="/portrait.jpg" />
        <AboutCard />
        <ContactBar />
      </div>
    </main>
  );
}
