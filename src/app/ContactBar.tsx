"use client"

import {LinkedinLogo, GithubLogo, Envelope} from "@phosphor-icons/react"

export default function ContactBar() {
  return (
    <div className="flex flex-col gap-[16px]">
      <a href="#" className="shadow-default size-[60px] bg-white rounded-[15px] flex justify-center items-center"><LinkedinLogo size={29}/></a>
      <a href="#" className="shadow-default size-[60px] bg-white rounded-[15px] flex justify-center items-center"><GithubLogo size={29}/></a>
      <a href="#" className="shadow-default size-[60px] bg-white rounded-[15px] flex justify-center items-center"><Envelope size={29}/></a>
    </div>
  );
}
