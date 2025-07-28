import IconCard from "@/components/custom/link/IconCard";
import {
  LinkedinLogo,
  GithubLogo,
  Envelope,
} from "@phosphor-icons/react/dist/ssr";

export default function ContactBar() {
  return (
    <div className="flex md:flex-col gap-[1rem]">
      <IconCard Icon={GithubLogo} href="https://github.com/aidinio" />
      <IconCard Icon={LinkedinLogo} href="https://www.linkedin.com/in/aidinio/" />
      <IconCard Icon={Envelope} href="mailto:aidin.ntr@gmail.com" />
    </div>
  );
}
