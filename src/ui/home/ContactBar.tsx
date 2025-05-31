import IconCard from "@/components/custom/link/IconCard";
import {
  LinkedinLogo,
  GithubLogo,
  Envelope,
} from "@phosphor-icons/react/dist/ssr";

export default function ContactBar() {
  return (
    <div className="flex sm:flex-col gap-[1rem]">
      <IconCard Icon={GithubLogo} href="#" />
      <IconCard Icon={LinkedinLogo} href="#" />
      <IconCard Icon={Envelope} href="#" />
    </div>
  );
}
