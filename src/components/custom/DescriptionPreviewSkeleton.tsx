import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
      <div className="flex flex-col bg-white h-fit rounded-[35px] shadow-default w-fit">
        <div className="p-[16px] flex flex-col items-center gap-[20px] w-fit">
          <Skeleton className="w-[350px] h-[200px] rounded-[30px]" />
          <div className="px-[19px] flex flex-col items-center gap-[16px] text-[1rem] max-w-[350px]">
            <div className="gap-2 flex flex-col items-start justify-start">
              <Skeleton className="w-[300px] h-[25px] rounded-[30px]" />
              <Skeleton className="w-[150px] h-[25px] rounded-[30px]" />
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
              <Skeleton className="w-[280px] h-[20px] rounded-[30px]" />
              <Skeleton className="w-[280px] h-[20px] rounded-[30px]" />
              <Skeleton className="w-[180px] h-[20px] rounded-[30px]" />
            </div>
            <Skeleton className="w-[170px] h-[50px] rounded-[30px]" />
          </div>
        </div>
      </div>
    );
  }