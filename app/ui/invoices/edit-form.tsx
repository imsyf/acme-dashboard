import Link from "next/link";

import { CustomerField, InvoiceForm } from "@/app/lib/definitions";
import { Button } from "@/app/ui/button";

import {
  CancelButton,
  CustomerName,
  InvoiceAmount,
  InvoiceStatus,
} from "./inputs";
import { updateInvoice } from "@/app/lib/actions";

export default function EditInvoiceForm({
  invoice,
  customers,
}: {
  invoice: InvoiceForm;
  customers: CustomerField[];
}) {
  const updateInvoiceWithId = updateInvoice.bind(null, invoice?.id);

  return (
    <form action={updateInvoiceWithId}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <CustomerName
          customers={customers}
          defaultValue={invoice?.customer_id}
        />
        <InvoiceAmount defaultValue={invoice?.amount} />
        <InvoiceStatus defaultStatus={invoice?.status} />
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <CancelButton />
        <Button type="submit">Edit Invoice</Button>
      </div>
    </form>
  );
}
