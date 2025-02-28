"use client"

// import { Carousel } from "@/components/carousel"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Heading2 from "@/components/ui/heading2"
import Image from "next/image"

// Data for image gallery
const data: { src: string; alt: string }[] = [
    {
        src: "/images/home/pages-zoo.jpg",
        alt: "Image 1 for carousel",
    },
    {
        src: "/images/zoo/img1.jpg",
        alt: "Image 2 for carousel",
    },
    {
        src: "/images/zoo/img2.jpg",
        alt: "Image 3 for carousel",
    },
    {
        src: "/images/zoo/img3.jpg",
        alt: "Image 4 for carousel",
    },
]

export default function pettingZoo() {
    return (
        <main className="flex w-full flex-col items-center space-y-10 px-5 py-20">
            <Heading2>Our lovely zoo</Heading2>
            {/* <Carousel /> */}
            <Carousel className="relative flex aspect-7/4 h-full max-h-[630px] w-full max-w-[1100px]">
                <CarouselContent>
                    {data.map((item, idx) => (
                        <CarouselItem key={idx}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-7/4 items-center justify-center p-0">
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            width={1100}
                                            height={630}
                                            key={idx}
                                            className="h-full w-full rounded-lg object-cover shadow-md md:w-full"
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </main>
    )
}
