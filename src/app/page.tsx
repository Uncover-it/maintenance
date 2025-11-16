import Spinner from "@/components/ui/spinner";
import { Wrench } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="font-sans grid place-items-center min-h-dvh px-8 gap-16">
      <main className="flex flex-col gap-6">
        <Spinner size={128} />
        <h1 className="font-mono text-4xl text-center">
          We&apos;ll be right back
        </h1>
        <Link
          className={buttonVariants({ size: "lg" })}
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
