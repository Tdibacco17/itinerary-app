import { Loader } from "lucide-react";

export default function LoadingSkeleton() {
    return (
        <div className="w-full flex justify-center pt-40">
            <Loader className="animate-spin" />
        </div>
    )
}