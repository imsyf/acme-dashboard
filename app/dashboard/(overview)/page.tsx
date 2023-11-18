import {
  fetchCardData,
  fetchLatestInvoices,
  fetchRevenue,
} from "@/app/lib/data";
import { lusitana } from "@/app/ui/fonts";

import { Card } from "../cards";
import LatestInvoices from "../latest-invoices";
import RevenueChart from "../revenue-chart";

export default async function Page() {
  const {
    customersCount,
    invoicesCount,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={invoicesCount} type="invoices" />
        <Card title="Total Customers" value={customersCount} type="customers" />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue} />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}