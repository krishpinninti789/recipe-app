import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div className="flex  h-screen justify-center items-center">
      <Skeleton className="w-[100px]  h-[20px] rounded-full">
        <h1 className="bg-none"> Loading...</h1>
      </Skeleton>
    </div>
  );
}
