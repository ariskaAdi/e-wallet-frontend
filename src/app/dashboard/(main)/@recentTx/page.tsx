import dynamic from "next/dynamic";

const RecentTxPage = dynamic(
  () => import("@/features/dashboard/home/recent-tx"),
  {
    ssr: true,
  },
);

const ServerRecentTxPage = async () => {
  return <RecentTxPage />;
};

export default ServerRecentTxPage;
