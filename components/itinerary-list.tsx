import { getItineraryChecks } from "@/app/actions";
import ItineraryListClient from "./itinerary-list-client";

export default async function ItineraryList() {
  const checksData = await getItineraryChecks();
  return <ItineraryListClient checksData={checksData} />;
}