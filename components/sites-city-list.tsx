import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import SitesData
    from "@/models/sites"
import Link from "next/link"
export default function SitesCityList() {
    return (
        <Accordion type="single" collapsible>
            {SitesData.map((city, cityIndex) => (
                <AccordionItem key={cityIndex} value={`item-${cityIndex}`}>
                    <AccordionTrigger className="text-base">{city.title}</AccordionTrigger>
                    <AccordionContent>
                        {city.array_sites.map((category, catIndex) => (
                            <div key={catIndex} className="mb-10">
                                <p className="text-sm font-semibold">{category.title}</p>
                                <ul className="">
                                    {category.sites.map((site, siteIndex) => (
                                        <li key={siteIndex} className="list-disc">
                                            <Link
                                                href={site.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-400 text-sm flex items-center gap-2 py-2.5 border-b"
                                            >
                                                <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                                                {site.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}