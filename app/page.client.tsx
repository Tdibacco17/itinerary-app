'use client';

import * as React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { MapPinned } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { formatShortWeekdayDate } from "@/utils/formatShortWeekdayDate";
import ItineraryData, { ItineraryInterface } from "@/models/itinerary";
import { ToggleButton } from '@/components/toggleButton';
import { useGlobal } from '@/hooks/use-global';

export default function ClientPage({ checksData }: { checksData: Record<number, boolean> }) {
    const { data, setData } = useGlobal();

    React.useEffect(() => {
        const newData: ItineraryInterface[] = ItineraryData.map(item => ({
            ...item,
            check: checksData[item.id] ?? false,
        }));

        setData(newData);
    }, [checksData, setData]);

    if (!data) return null;

    return (
        <div className="space-y-6">
            {data.map((item) => {
                const isCheck = item.check;

                return (
                    <Card key={item.id} className="">
                        <CardHeader className="gap-0">
                            <CardTitle className="justify-between items-center flex">
                                <p className="text-base">
                                    <span>
                                        {`${item.title}`}
                                    </span>
                                </p>
                                {(item.type === 'vuelo' || item.type === 'tren') && !isCheck &&
                                    <p className="text-sm">
                                        <span className="text-muted-foreground text-xs font-normal">
                                            {`Reserva - `}
                                        </span>
                                        <span className="text-base">
                                            {`${item.code}`}
                                        </span>
                                    </p>}
                            </CardTitle>
                            {/* {item.subtitle && <p>{`${item.subtitle}`}</p>} */}
                            <CardDescription className="pt-1">
                                {item.type === 'hotel' && (item.direction || item.subtitle) && !isCheck &&
                                    <div className="flex justify-between items-start gap-3">
                                        <div className="flex flex-col justify-end h-full">
                                            {item.subtitle && <p className="font-normal uppercase">{` ${item.subtitle}`}</p>}
                                            {item.direction && <p className="italic">{`${item.direction}`}</p>}
                                        </div>
                                        {item.booking_link &&
                                            <Link href={item.booking_link} target="_blank" rel="noopener noreferrer"
                                                className={buttonVariants({
                                                    size: 'icon', variant: 'secondary'
                                                })}>
                                                <MapPinned />
                                            </Link>}
                                    </div>
                                }
                                {isCheck
                                    && <div className='flex justify-between items-center w-full'>
                                        <div>
                                            <p className="capitalize text-muted-foreground italic">
                                                {`${item.exit.text} - ${formatShortWeekdayDate(item.exit.day)} - ${item.exit.hour}`}
                                            </p>
                                            <p className="capitalize text-muted-foreground italic">
                                                {`${item.arrival.text} - ${formatShortWeekdayDate(item.arrival.day)} - ${item.arrival.hour}`}
                                            </p>
                                        </div>
                                        <ToggleButton id={item.id} currentCheck={isCheck} />
                                    </div>}
                            </CardDescription>
                        </CardHeader>
                        {!isCheck &&
                            <>
                                <CardContent className="gap-6 flex flex-col w-full">
                                    {/* <p><strong>Tipo:</strong> {item.type}</p> */}
                                    <div className="flex">
                                        <ul className="px-4 space-y-2 text-base w-full">
                                            <li className="list-disc">
                                                <div className="flex flex-col">
                                                    <p className="capitalize text-muted-foreground italic">
                                                        {`${item.exit.text}`}
                                                    </p>
                                                    <p className="font-semibold">
                                                        <span className="capitalize">
                                                            {`${formatShortWeekdayDate(item.exit.day)}`}
                                                        </span>
                                                        <span>
                                                            {` - ${item.exit.hour}`}
                                                        </span>
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="list-disc">
                                                <div className="flex flex-col">
                                                    <p className="capitalize text-muted-foreground italic">
                                                        {`${item.arrival.text}`}
                                                    </p>
                                                    <p className="font-semibold">
                                                        <span className="capitalize">
                                                            {`${formatShortWeekdayDate(item.arrival.day)}`}
                                                        </span>
                                                        <span>
                                                            {` - ${item.arrival.hour}`}
                                                        </span>
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                        <ToggleButton id={item.id} currentCheck={isCheck} />
                                    </div>

                                    {(item.type === 'vuelo') &&
                                        <div>
                                            {item.seat && <div className="text-sm grid grid-cols-2">
                                                <p className="font-normal text-muted-foreground text-left">{`Asiento`}</p>
                                                <p className="font-semibold text-right">{`${item.seat}`}</p>
                                            </div>}
                                            {item.suitcase && <div className="text-sm grid grid-cols-2">
                                                <p className="font-normal text-muted-foreground text-left">{`Valija`}</p>
                                                <p className="font-semibold text-right">{`${item.suitcase}`}</p>
                                            </div>}
                                            {item.hand_luggage &&
                                                <div className="flex flex-col w-full">
                                                    <div className="text-sm grid grid-cols-2">
                                                        <p className="font-normal text-muted-foreground text-left">{`Mochila`}</p>
                                                        <p className="font-semibold text-right">{`${item.hand_luggage}`}</p>
                                                    </div>
                                                    <p className="text-xs text-muted-foreground text-right">{`(largo x ancho x alto)`}</p>
                                                </div>
                                            }
                                        </div>
                                    }

                                    {item.reminder &&
                                        <p className="italic text-sm">
                                            <span>{`NOTA! `}</span>
                                            <span className="text-muted-foreground">{`${item.reminder}`}</span>
                                        </p>}
                                </CardContent>
                                {item.next_action && (
                                    <CardFooter className="flex flex-col items-start gap-2">
                                        <Accordion type="single" collapsible className="w-full">
                                            <AccordionItem value="item-1">
                                                <AccordionTrigger className="p-0 h-[30px] flex items-end justify-between underline">Luego</AccordionTrigger>
                                                <AccordionContent className="p-0 pt-2">
                                                    <ul className="text-sm px-4 space-y-3">
                                                        {item.next_action.map((action, i) => (
                                                            <li key={i} className="list-disc">
                                                                <p> {`${action.text}`}</p>
                                                                {(action.link) ?
                                                                    <Link href={action.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 h-[30px] border-l-[2px] border-l-muted-foreground pl-3 mt-1">
                                                                        {action.link && <p className="underline text-blue-400">
                                                                            {`Ver recorrido`}
                                                                        </p>}
                                                                        {action.time && <p className="text-muted-foreground">{`${action.time}`}</p>}
                                                                    </Link>
                                                                    : action.time ?
                                                                        <div className="flex items-center gap-2 h-[30px] border-l-[2px] border-l-muted-foreground pl-3 mt-1">
                                                                            {action.time && <p className="text-muted-foreground">{`${action.time}`}</p>}
                                                                        </div>
                                                                        : null}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    </CardFooter>
                                )}
                            </>
                        }
                    </Card>
                )
            })}
        </div>
    )
}