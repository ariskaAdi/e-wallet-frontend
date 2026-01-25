import dynamic from "next/dynamic";

const UserCardPage = dynamic(
  () => import("@/features/dashboard/home/user-card"),
  {
    ssr: true,
  },
);

const ServerUserCardPage = async () => {
  return <UserCardPage />;
};

export default ServerUserCardPage;
