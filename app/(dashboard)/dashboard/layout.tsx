import ModalProvider from "@/components/providers/modal-provider";
import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAuthSession();

  if (session?.user.role !== "ADMIN") {
    redirect("/");
  }

  return (
    <>
      <ModalProvider />
      {children}
    </>
  );
}
