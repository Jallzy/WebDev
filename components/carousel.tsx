import { useState } from "react"
import Image from "next/image"

import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

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

export const Carousel = () => {
    const [slide, setSlide] = useState(0)

    const nextSlide = () => {
        // Showing next image
        setSlide(slide === data.length - 1 ? 0 : slide + 1)
    }

    const prevSlide = () => {
        // Showing previous image
        setSlide(slide === 0 ? data.length - 1 : slide - 1)
    }

    return (
        <div className="relative flex aspect-[7/4] h-full max-h-[630px] w-full max-w-[1100px] items-center justify-center overflow-y-hidden md:overflow-y-visible">
            <Button
                variant="outline"
                size="icon"
                className="absolute left-0 h-8 w-8 cursor-pointer md:-left-10"
                onClick={prevSlide}
            >
                <ChevronLeftIcon className="h-4 w-4" />
            </Button>
            {data.map((item, idx) => {
                return (
                    <Image
                        src={item.src}
                        alt={item.alt}
                        width={1100}
                        height={630}
                        key={idx}
                        className={
                            slide === idx
                                ? "h-full w-[calc(100%-90px)] rounded-lg object-cover shadow-md md:w-full"
                                : "hidden"
                        }
                    />
                )
            })}
            <Button
                variant="outline"
                size="icon"
                className="absolute right-0 h-8 w-8 cursor-pointer md:-right-10"
                onClick={nextSlide}
            >
                <ChevronRightIcon className="h-4 w-4" />
            </Button>
        </div>
    )
}
