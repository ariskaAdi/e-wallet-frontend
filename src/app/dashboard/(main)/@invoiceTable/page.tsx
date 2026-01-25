import dynamic from "next/dynamic";

const InvoiveTablePage = dynamic(
  () => import("@/features/dashboard/home/invoice-table"),
  {
    ssr: true,
  },
);

const ServerInvoiveTablePage = async () => {
  return <InvoiveTablePage />;
};

export default ServerInvoiveTablePage;
