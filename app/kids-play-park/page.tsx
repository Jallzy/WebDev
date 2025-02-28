import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import Heading2 from "@/components/ui/heading2"

export default function KidsPlayPark() {
    return (
        <main className="flex w-full flex-col items-center gap-y-10 py-20">
            <Heading2>Our Park For Kids</Heading2>
            <div className="container grid max-w-256 grid-cols-4 place-items-center gap-4">
                {Array.from({ length: 16 }).map((_, idx) => (
                    <Card
                        key={idx}
                        className="overflow-hidden transition-all hover:scale-200"
                    >
                        <CardContent className="w-full object-cover p-0">
                            <Image
                                className="size-full object-cover"
                                width={612}
                                height={408}
                                src={"/images/kids-park/kids-play-park.jpg"}
                                alt="park image"
                            />
                        </CardContent>
                    </Card>
                ))}
            </div>
        </main>
    )
}
