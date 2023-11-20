import { Suspense } from "react";

import { lusitana } from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";

import Table from "./table";

// Reference: https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional
export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>

      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
      </div>

      <Suspense key={query} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} />
      </Suspense>
    </div>
  );
}
