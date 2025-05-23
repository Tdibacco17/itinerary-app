import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import SitesData
, {
    GroupedSiteBlock,
    Site,
    SiteCategory
} from "@/models/sites"
import { MapPinned, Ticket } from "lucide-react";
import Link from "next/link"
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export default function SitesCityList() {

    return (
        <Accordion type="single" collapsible>
            {SitesData.map((city, cityIndex) => (
                <AccordionItem key={cityIndex} value={`item-${cityIndex}`}>
                    <AccordionTrigger className="text-base px-4">{city.title}</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col w-full">
                            <div className="flex items-center justify-between px-4 gap-2">
                                <p className="text-ms text-muted-foreground">{city.direction}</p>
                                <Link href={city.link} target="_blank" rel="noopener noreferrer"
                                    className={buttonVariants({
                                        size: 'icon', variant: 'secondary'
                                    })}>
                                    <MapPinned />
                                </Link>
                            </div>
                            <Accordion type="single" collapsible className="px-4">
                                {city.array_sites.map((category, catIndex) => {
                                    const groupedSites = groupSitesFromCategory(category);

                                    return (
                                        <AccordionItem key={catIndex} value={`cat-${cityIndex}-${catIndex}`}>
                                            <AccordionTrigger>
                                                <p>
                                                    <span>
                                                        {`${category.title} ${category.date ? '- ' : ''}`}
                                                    </span>
                                                    {category.date &&
                                                        <span className="text-green-400 text-sm">
                                                            {category.date}
                                                        </span>}
                                                </p>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <ul className="px-4 mb-2 -mt-4">
                                                    {groupedSites.map((group, groupIndex) => {
                                                        return (
                                                            <li key={groupIndex} className="list-disc">
                                                                <div className="py-4 border-b flex flex-col">
                                                                    <div className="flex justify-between items-center gap-4">
                                                                        {group.isGrouped ? (
                                                                            <p className="text-sm">
                                                                                {group.title}
                                                                            </p>
                                                                        ) : (
                                                                            group.sites[0].link ? <Link
                                                                                href={group.sites[0].link}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                                className="text-blue-400 text-sm w-fit"
                                                                            >
                                                                                {group.title}
                                                                            </Link> : <p>
                                                                                {group.title}
                                                                            </p>
                                                                        )}

                                                                        {group.sites.some(s => s.require_entry) && (
                                                                            <Ticket
                                                                                className={cn("w-5 min-w-5 min-h-5 h-5",
                                                                                    group.sites.some(s => s.have_ticket) ? "text-green-500" : "text-muted-foreground"
                                                                                )}
                                                                                // have_ticket
                                                                            />
                                                                        )}
                                                                    </div>
                                                                    {(group.note || group.price || group.link) && (
                                                                        <div className="flex justify-between items-start gap-6">
                                                                            <div className="flex flex-col">
                                                                                {group.note && <div className="w-full pt-2">
                                                                                    {group.note.map((n, i) => (
                                                                                        <p key={i} className="text-muted-foreground text-sm">{n}</p>
                                                                                    ))}
                                                                                </div>}
                                                                                {group.price && <p className="text-muted-foreground text-sm">{`Precio: €${group.price} aprox.`}</p>}
                                                                            </div>
                                                                            {group.link && (
                                                                                <Link
                                                                                    href={group.link}
                                                                                    target="_blank"
                                                                                    rel="noopener"
                                                                                    className="text-blue-400 underline text-xs w-fit h-[30px] leading-[20px] flex items-end"
                                                                                >
                                                                                    Comprar
                                                                                </Link>
                                                                            )}
                                                                        </div>
                                                                    )}

                                                                    {group.isGrouped && (
                                                                        <ul className="pl-4 mt-2">
                                                                            {group.sites.map(site => (
                                                                                <li key={site.id} className="py-1 list-disc">
                                                                                    <div className="flex flex-col">
                                                                                        {site.link ? (
                                                                                            <Link
                                                                                                href={site.link}
                                                                                                target="_blank"
                                                                                                rel="noopener noreferrer"
                                                                                                className="text-blue-400 text-sm w-fit leading-[30px]"
                                                                                            >
                                                                                                <p>{site.title}</p>
                                                                                            </Link>
                                                                                        ) : (
                                                                                            <p className="text-sm w-fit leading-[30px]">{site.title}</p>
                                                                                        )}
                                                                                        {site.note &&
                                                                                            <div className="border-l-[2px] border-l-muted-foreground pl-3 mt-1">
                                                                                                {site.note.map((note, i) => (
                                                                                                    <p key={i} className="text-muted-foreground text-sm">{note}</p>
                                                                                                ))}
                                                                                            </div>}
                                                                                    </div>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    )}
                                                                </div>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                    )
                                })}
                            </Accordion>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))
            }
        </Accordion >
    )
}

function groupSitesFromCategory(category: SiteCategory): GroupedSiteBlock[] {
    const used = new Set<string>();

    const groups: GroupedSiteBlock[] = (category.groups ?? [])
        .map(group => {
            const sites = group.site_ids
                .map(id => category.sites.find(site => site.id === id))
                .filter(Boolean) as Site[];

            sites.forEach(site => used.add(site.id));

            return {
                isGrouped: true,
                title: group.title,
                sites,
                note: group.note,
                link: group.link,
                price: group.price,
                orden: group.orden ?? 999, // 🆕 usamos el campo orden
            };
        });

    const ungrouped: GroupedSiteBlock[] = category.sites
        .filter(site => !used.has(site.id))
        .map(site => ({
            isGrouped: false,
            title: site.title,
            sites: [site],
            note: site.note,
            price: site.price,
            link: site.ticket_link,
            orden: site.orden ?? 999, // 🆕 también aquí
        }));

    // 🧠 Finalmente ordenamos todo según `orden`
    return [...groups, ...ungrouped].sort((a, b) => a.orden - b.orden);
}
