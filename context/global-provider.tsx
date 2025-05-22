'use client'

import { ItineraryInterface } from '@/models/itinerary'
import {
    createContext,
    useState
} from 'react'

interface GlobalProps {
    loading: boolean
    setLoading: (val: boolean) => void,
    data: ItineraryInterface[] | null,
    setData: (val: ItineraryInterface[]) => void
}

export const GlobalContext = createContext<GlobalProps | undefined>(undefined)

export function GlobalProvider({ children }: { children: React.ReactNode }) {
    const [data, setData] = useState<ItineraryInterface[] | null>(null)
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <GlobalContext.Provider value={{ loading, setLoading, data, setData }}>
            {children}
        </GlobalContext.Provider>
    )
}
