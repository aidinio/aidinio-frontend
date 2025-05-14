"use client";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
// import { CornersOut } from "@phosphor-icons/react";

export default function Blog() {
  return (
    <div className="flex place-self-start justify-between grow gap-[105px] h-fit">
      <div
        className="grow-[5] bg-white rounded-[50px] px-[140px] py-[160px] shadow-default relative h-full mb-[50px] overflow-hidden"
      >
        <div className="-z-30">
          <div className="w-[500px] h-[500px] absolute bg-[#BAF7FF] top-[40px] right-[30%] z-0 blur-[550px] opacity-75 rounded-full"></div>
          <div className="w-[500px] h-[500px] absolute bg-[#FFB2B2] top-[550px] right-[-10%] z-0 blur-[550px] opacity-75 rounded-full"></div>
          <div className="w-[500px] h-[500px] absolute bg-[#FEFFBA] top-[340px] right-[10%] z-0 blur-[550px] opacity-75 rounded-full"></div>
        </div>
        {/* <div className="bg-white rounded-full shadow-default size-fit p-[10px] absolute top-[65px] right-[65px] cursor-pointer">
          <CornersOut size={24} />
        </div> */}
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-[1100px] flex flex-col gap-[100px]">
            <article className="flex flex-col gap-[32px] z-30 relative h-full">
              <h1 className="text-[40px] font-extrabold text-justify">
                Using d-bus with AwesomeWM to make event-based widgets
              </h1>
              <div className="flex flex-col gap-[32px] px-[60px] h-full">
                <div className="flex justify-between items-center text-[#7E7E7E] font-medium text-[16px]">
                  <div className="">
                    <Image
                      className="rounded-full inline-block"
                      width={40}
                      height={40}
                      src="/portrait.jpg"
                      alt="profile picture"
                    />
                    <span>Aidin</span>
                  </div>
                  <div>August 22, 2024</div>
                </div>
                <div className="flex flex-wrap gap-[15px]">
                  <BlogTag text="awesomewm" />
                  <BlogTag text="lua" />
                  <BlogTag text="linux" />
                </div>
                <div className="tracking-[3%] leading-[210%] text-justify text-[20px] font-medium">
                  <h1 className="font-bold text-[24px]">
                    What are we going to do?
                  </h1>
                  <p className=" indent-[17px]">
                    In this tutorial, we will take a look at the d-bus library,
                    how and when it is used, and how to integrate it with the
                    awesome window manager to have efficient widgets which do
                    not consume a lot of resources
                  </p>
                  <h1 className="font-bold text-[24px]">Using d-bus with C</h1>
                  <p className="indent-[17px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent egestas tortor ut est tincidunt, nec elementum
                    augue volutpat. Nullam dignissim pretium suscipit. Sed at
                    sem at mi auctor scelerisque. Donec eleifend sit amet leo
                    eget bibendum. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Fusce euismod tempor ex, vestibulum laoreet
                    risus. Nam ut turpis tempus, tincidunt lorem et, pharetra
                    nisi. Pellentesque pretium mollis nisl, at interdum felis
                    convallis at. Fusce non arcu eget arcu viverra eleifend id
                    ac magna. Nullam ut sapien commodo, tincidunt augue eu,
                    ultrices diam. Donec dapibus sit amet urna nec interdum.
                    Cras vitae odio ipsum. Proin porttitor ultricies nulla.
                    Vestibulum non metus elementum, interdum arcu ac, aliquet
                    ante. Vestibulum sed elit eu justo pulvinar posuere. Mauris
                    porttitor nunc at malesuada bibendum.
                  </p>
                  <h1 className="font-bold text-[24px]">
                    Accessing d-bus from lua
                  </h1>
                  <p className="indent-[17px]">
                    Nullam pulvinar eros in ipsum sollicitudin sodales. Duis
                    tristique feugiat urna vel pretium. Sed aliquam malesuada
                    varius. In in ultricies felis. Nam tempor, magna nec
                    condimentum hendrerit, libero orci posuere lacus, eget
                    rhoncus urna velit ac dolor. Donec ac ligula mollis,
                    bibendum lectus sed, tristique libero. Proin mollis aliquam
                    risus. Donec finibus turpis vitae libero pulvinar, ut
                    accumsan orci porta. Sed at cursus nibh. Integer euismod,
                    eros non vehicula ornare, lectus diam consequat tortor,
                    ornare facilisis massa lacus tempus leo. Nulla dictum eu ex
                    in ultrices.
                  </p>
                  <p className="indent-[17px]">
                    Proin ut est lacinia, tristique leo in, aliquet diam.
                    Vestibulum vehicula maximus justo, quis vulputate dui
                    maximus vel. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Nullam
                    condimentum eget magna eu bibendum. Praesent dolor est,
                    interdum in quam quis, tempus condimentum leo. Nulla
                    facilisi. Donec in dui quis odio feugiat euismod. Donec
                    porta suscipit lobortis. Quisque nisl tortor, venenatis quis
                    finibus sed, mattis non ligula. Nulla semper eleifend arcu
                    quis posuere.
                  </p>
                  <p className="indent-[17px]">
                    Sed posuere rutrum felis, id molestie magna pharetra vitae.
                    Sed tellus nisl, pellentesque varius erat eget, accumsan
                    accumsan nisl. Duis sollicitudin urna in massa aliquam,
                    tincidunt commodo purus mollis. Nam ultricies egestas massa
                    accumsan tincidunt. Donec malesuada elit sed nunc elementum
                    maximus. Maecenas nulla diam, laoreet sit amet lacus vitae,
                    viverra sagittis velit. Proin posuere vehicula orci ut
                    faucibus. Etiam mollis, enim eget tristique posuere, turpis
                    magna ultrices neque, at porta ipsum lorem vel elit. Sed
                    mollis varius mi, id egestas erat lobortis sed. Proin
                    euismod convallis purus, non lobortis magna laoreet vitae.
                    Vestibulum eleifend eros eros, vitae volutpat mauris mollis
                    id. Ut ornare condimentum erat, in bibendum odio finibus ac.
                    Cras ullamcorper libero nec neque tristique, eget convallis
                    velit scelerisque. Phasellus tincidunt efficitur sapien nec
                    mollis. Duis ultricies mi vel laoreet malesuada. Vestibulum
                    euismod nec lectus eu congue. Quisque consectetur eget
                    lectus non tempor. Donec in dui pellentesque, maximus lorem
                    vel, consequat tellus. Etiam mollis condimentum iaculis.
                    Cras ut sapien vel nibh tincidunt cursus ut vel urna. Donec
                    a dictum erat. Donec facilisis lobortis eros, sit amet
                    laoreet leo sodales a.
                  </p>
                </div>
              </div>
            </article>
            <SimilarArticles />
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col relative gap-[15px] h-fit">
        <SuggestedPost />
        <SuggestedPost />
      </div> */}
    </div>
  );
}

function BlogTag({ text }: { text: string }) {
  return (
    <span className="font-semibold rounded-full px-[17px] py-[6px] bg-white shadow-[0px_0px_10px_0px_#E9E9E9]">
      {text}
    </span>
  );
}

function SuggestedPost() {
  return (
    <div className="flex flex-col bg-white h-fit rounded-[35px] shadow-default w-fit">
      <div className="p-[16px] flex flex-col items-center gap-[20px] w-fit">
        <Image
          className="rounded-[20px] min-w-[350px]"
          src="/suggestion.jpg"
          alt="blog suggestion poster"
          width={270}
          height={168}
        />
        <div className="px-[19px] flex flex-col items-center gap-[16px] text-[15px] max-w-[350px]">
          <h2 className="font-semibold text-[17px]">
            Using d-bus with AwesomeWM to make event-based widgets
          </h2>
          <p className="text-justify px-[10px] font-medium">
            In this tutorial, we will take a look at the d-bus library, how and
            when it is used, and how to
          </p>
          <Link
            href="#"
            className="mb-[10px] flex justify-center items-center gap-[20px] bg-gradient-to-r from-[#BAF7FFAA] via-[#FEFFBAAA] to-[#FFB2B2AA] rounded-full px-[20px] py-[14px] font-semibold"
          >
            <span className="grow shrink-0">Read More </span>
            <div className="bg-[url(/arrow.svg)] bg-center bg-size-[cover] size-[18px] bg-no-repeat grow shrink-0"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
function SimilarArticles() {
  const [api, setApi] = useState<CarouselApi>();
  const [canPrev, setCanPrev] = useState<undefined | boolean>(undefined);
  const [canNext, setCanNext] = useState<undefined | boolean>(undefined);
  useEffect(() => {
    api?.on("scroll", () => {
      if (!api) return;
      setCanPrev(api.canScrollPrev());
      setCanNext(api.canScrollNext());
    });
  }, [api]);
  return (
    <div className="flex flex-col gap-[40px]">
      <h1 className="text-[36px] font-bold">Similar Articles</h1>
      <Carousel
        opts={{ dragFree: true }}
        setApi={setApi}
        className="flex gap-[30px] relative"
      >
        <AnimatePresence>
          {canPrev && (
            <motion.div
              className="absolute h-full w-[100px] bg-gradient-to-r from-[#ffffff] to-transparent block z-10"
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{duration: 0.5, ease: easeInOut}}
            />
          )}
        </AnimatePresence>
        <CarouselPrevious className="size-[40px]" />
        <CarouselContent className="flex gap-[50px]">
          <SuggestedPost />
          <SuggestedPost />
          <SuggestedPost />
        </CarouselContent>
        <CarouselNext className="size-[40px]" />

        <AnimatePresence>
          {canNext && (
            <motion.div
              className="absolute h-full w-[100px] bg-gradient-to-l from-[#ffffff] block z-10 right-0"
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{duration: 0.3, ease: easeInOut}}
            />
          )}
        </AnimatePresence>
      </Carousel>
    </div>
  );
}
