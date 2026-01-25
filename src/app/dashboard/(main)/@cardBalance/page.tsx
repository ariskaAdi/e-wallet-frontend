import dynamic from "next/dynamic";

const BalanceCardPage = dynamic(
  () => import("@/features/dashboard/home/user-balance"),
  {
    ssr: true,
  },
);

const ServerBalanceCardPage = async () => {
  return <BalanceCardPage />;
};

export default ServerBalanceCardPage;
