import dynamic from "next/dynamic";

const AnalyticsPage = dynamic(
  () => import("@/features/dashboard/home/analytics"),
  {
    ssr: true,
  },
);

const ServerAnalyticsPage = async () => {
  return <AnalyticsPage />;
};

export default ServerAnalyticsPage;
