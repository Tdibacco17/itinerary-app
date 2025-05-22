'use client'

import { useGlobal } from "@/hooks/use-global";
import { Loader } from "lucide-react";

export default function Mask() {
    const { loading } = useGlobal();

    return (
        <>
            {loading && (
                <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
                    <div className="relative">
                        <div className="absolute -top-10 left-0 h-full w-full flex justify-center">
                            <Loader className="animate-spin" />
                        </div>
                        <p className="text-white text-sm">Guardando cambios...</p>
                    </div>
                </div>
            )}
        </>
    )
}