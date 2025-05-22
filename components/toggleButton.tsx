'use client';

import { useState } from 'react';
import { toggleItineraryCheck } from "@/app/actions";
import { Button } from './ui/button';
import { Check, X } from 'lucide-react';
import { useGlobal } from '@/hooks/use-global';

export function ToggleButton({ id, currentCheck }: { id: number; currentCheck: boolean }) {
    const { loading, setLoading } = useGlobal();
    const [check, setCheck] = useState(currentCheck ?? false);

    const handleClick = async () => {
        setLoading(true);
        try {
            const res = await toggleItineraryCheck(id, check);
            setCheck(res.check);
        } catch (err) {
            console.error("Error al cambiar check:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center">
            <Button
                variant={'outline'}
                size={'icon'}
                onClick={handleClick}
                disabled={loading}
            >
                {!check ? <Check /> : <X />}
            </Button>
        </div>
    );
}
