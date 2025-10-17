import Spinner from "@/components/ui/spinner";
import { Wrench } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-6 row-start-2 items-center sm:items-start">
        <Spinner size={128} className=" w-full" />
        <h1 className="font-mono text-4xl text-center">
          We&apos;ll be right back
        </h1>
        <Link
          className={cn(buttonVariants({ size: "lg" }), "w-full")}
          href={"https://status.uncoverit.org"}
          target="_blank"
        >
          <Wrench />
          Maintenance in progress
        </Link>
      </main>
    </div>
  );
}
