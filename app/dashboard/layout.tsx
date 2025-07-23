import SideNav from "@/app/ui/dashboard/sidenav";

export const experimental_ppr = true
// This enables the experimental PPR (Partial Page Rendering) feature in Next.js

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <main className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {children}
      </main>
    </div>
  );
}