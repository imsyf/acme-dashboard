"use client";

import { createInvoice } from "@/app/lib/actions";
import { CustomerField } from "@/app/lib/definitions";
import { Button } from "@/app/ui/button";

import {
  CancelButton,
  CustomerName,
  InvoiceAmount,
  InvoiceStatus,
} from "./inputs";

export default function Form({ customers }: { customers: CustomerField[] }) {
  return (
    <form action={createInvoice}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <CustomerName customers={customers} />
        <InvoiceAmount />
        <InvoiceStatus />
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <CancelButton />
        <Button type="submit">Create Invoice</Button>
      </div>
    </form>
  );
}
