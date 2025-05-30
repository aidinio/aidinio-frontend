import { CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export default function useCarousel() {
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
    return { api, setApi, canPrev, canNext };
  }