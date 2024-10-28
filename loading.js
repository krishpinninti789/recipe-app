import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div className="flex  h-full justify-center items-center">
      <Skeleton className="w-[100px]  h-[20px] rounded-full">
        <h1> Loading...</h1>
      </Skeleton>
    </div>
  );
}
