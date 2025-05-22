
import { Suspense } from "react";
import LoadingSkeleton from "@/components/loading";
import ClientPage from "./page.client";
import { getItineraryChecks } from "./actions";
import Mask from "@/components/mask";
import { GlobalProvider } from "@/context/global-provider";

export default function Page() {
  return (
    <main className="px-4 py-6 w-full">
      <GlobalProvider>
        <Suspense fallback={<LoadingSkeleton />}>
          <AsyncPage />
        </Suspense>
        <Mask />
      </GlobalProvider>
    </main>
  )
}

async function AsyncPage() {
  const checksData = await getItineraryChecks();

  return <ClientPage checksData={checksData} />;
}