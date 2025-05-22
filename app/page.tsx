
import { Suspense } from "react";
import LoadingSkeleton from "@/components/loading";
import Mask from "@/components/mask";
import { GlobalProvider } from "@/context/global-provider";
import ItineraryList from "@/components/itinerary-list";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import SitesCityList from "@/components/sites-city-list";

export default function Page() {
  return (
    <main className="w-full pb-6">
      <Tabs defaultValue="itinerary" className="w-full p-0 m-0 gap-6">

        <TabsList className="w-full rounded-none m-0 h-14 min-h-14 max-h-14 sticky top-0 left-0">
          <TabsTrigger value="itinerary" className="rounded-none p-0 m-0">Itinerario</TabsTrigger>
          <TabsTrigger value="sites" className="rounded-none p-0 m-0">Lugares</TabsTrigger>
        </TabsList>

        <TabsContent value="itinerary" className="px-4">
          <GlobalProvider>
            <Suspense fallback={<LoadingSkeleton />}>
              <ItineraryList />
            </Suspense>
            <Mask />
          </GlobalProvider>
        </TabsContent>

        <TabsContent value="sites" className="px-4">
          <SitesCityList />
        </TabsContent>

      </Tabs>

    </main>
  )
}
